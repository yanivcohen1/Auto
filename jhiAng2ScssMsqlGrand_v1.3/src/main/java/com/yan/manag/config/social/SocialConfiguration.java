package com.yan.manag.config.social;

import com.yan.manag.repository.SocialUserConnectionRepository;
import com.yan.manag.repository.CustomSocialUsersConnectionRepository;
import com.yan.manag.security.jwt.TokenProvider;
import com.yan.manag.security.social.CustomSignInAdapter;

import io.github.jhipster.config.JHipsterProperties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.social.connect.web.ProviderSignInController;
import org.springframework.social.connect.web.ProviderSignInUtils;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.security.AuthenticationNameUserIdSource;
import org.springframework.social.twitter.connect.TwitterConnectionFactory;
// jhipster-needle-add-social-connection-factory-import-package

/**
 * Basic Spring Social configuration.
 *
 * <p>
 * Creates the beans necessary to manage Connections to social services and
 * link accounts from those services to internal Users.
 */
@Configuration
@EnableSocial
public class SocialConfiguration implements SocialConfigurer {

    private final Logger log = LoggerFactory.getLogger(SocialConfiguration.class);

    private final SocialUserConnectionRepository socialUserConnectionRepository;

    private final Environment environment;

    public SocialConfiguration(SocialUserConnectionRepository socialUserConnectionRepository,
            Environment environment) {

        this.socialUserConnectionRepository = socialUserConnectionRepository;
        this.environment = environment;
    }

    @Bean
    public ConnectController connectController(ConnectionFactoryLocator connectionFactoryLocator,
            ConnectionRepository connectionRepository) {

        ConnectController controller = new ConnectController(connectionFactoryLocator, connectionRepository);
        controller.setApplicationUrl(environment.getProperty("spring.application.url"));
        return controller;
    }

    @Override
    public void addConnectionFactories(ConnectionFactoryConfigurer connectionFactoryConfigurer, Environment environment) {
        // Google configuration
        String googleClientId = environment.getProperty("spring.social.google.client-id");
        String googleClientSecret = environment.getProperty("spring.social.google.client-secret");
        if (googleClientId != null && googleClientSecret != null) {
            log.debug("Configuring GoogleConnectionFactory");
            connectionFactoryConfigurer.addConnectionFactory(
                new GoogleConnectionFactory(
                    googleClientId,
                    googleClientSecret
                )
            );
        } else {
            log.error("Cannot configure GoogleConnectionFactory id or secret null");
        }

        // Facebook configuration
        String facebookClientId = environment.getProperty("spring.social.facebook.client-id");
        String facebookClientSecret = environment.getProperty("spring.social.facebook.client-secret");
        if (facebookClientId != null && facebookClientSecret != null) {
            log.debug("Configuring FacebookConnectionFactory");
            connectionFactoryConfigurer.addConnectionFactory(
                new FacebookConnectionFactory(
                    facebookClientId,
                    facebookClientSecret
                )
            );
        } else {
            log.error("Cannot configure FacebookConnectionFactory id or secret null");
        }

        // Twitter configuration
        String twitterClientId = environment.getProperty("spring.social.twitter.client-id");
        String twitterClientSecret = environment.getProperty("spring.social.twitter.client-secret");
        if (twitterClientId != null && twitterClientSecret != null) {
            log.debug("Configuring TwitterConnectionFactory");
            connectionFactoryConfigurer.addConnectionFactory(
                new TwitterConnectionFactory(
                    twitterClientId,
                    twitterClientSecret
                )
            );
        } else {
            log.error("Cannot configure TwitterConnectionFactory id or secret null");
        }

        // jhipster-needle-add-social-connection-factory
    }

    @Override
    public UserIdSource getUserIdSource() {
        return new AuthenticationNameUserIdSource();
    }

    @Override
    public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
        return new CustomSocialUsersConnectionRepository(socialUserConnectionRepository, connectionFactoryLocator);
    }

    @Bean
    public SignInAdapter signInAdapter(UserDetailsService userDetailsService, JHipsterProperties jHipsterProperties,
            TokenProvider tokenProvider) {
        return new CustomSignInAdapter(userDetailsService, jHipsterProperties,
            tokenProvider);
    }

    @Bean
    public ProviderSignInController providerSignInController(ConnectionFactoryLocator connectionFactoryLocator, UsersConnectionRepository usersConnectionRepository, SignInAdapter signInAdapter) {
        ProviderSignInController providerSignInController = new ProviderSignInController(connectionFactoryLocator, usersConnectionRepository, signInAdapter);
        providerSignInController.setSignUpUrl("/social/signup");
        providerSignInController.setApplicationUrl(environment.getProperty("spring.application.url"));
        return providerSignInController;
    }

    @Bean
    public ProviderSignInUtils getProviderSignInUtils(ConnectionFactoryLocator connectionFactoryLocator, UsersConnectionRepository usersConnectionRepository) {
        return new ProviderSignInUtils(connectionFactoryLocator, usersConnectionRepository);
    }
}
