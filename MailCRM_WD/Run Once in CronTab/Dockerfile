FROM       ubuntu:trusty
MAINTAINER Yaniv Cohen <Yaniv.Cohen@williamhill.com>

ENV JAVA_VERSION 8
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

ENV MAVEN_VERSION 3.3.3
ENV MAVEN_HOME /usr/share/maven
ENV PATH "$PATH:$MAVEN_HOME/bin"

# install utilities
RUN apt-get -y install vim git sudo zip bzip2 fontconfig curl

# install maven
RUN curl -fsSL http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz | tar xzf - -C /usr/share \
    && mv /usr/share/apache-maven-$MAVEN_VERSION /usr/share/maven \
    && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn
	
# install java8
RUN echo 'deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main' >> /etc/apt/sources.list && \
    echo 'deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main' >> /etc/apt/sources.list && \
#    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C2518248EEA14886 && \
    apt-get update && \
    echo oracle-java${JAVA_VER}-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections && \
    apt-get install -y --force-yes --no-install-recommends oracle-java${JAVA_VERSION}-installer oracle-java${JAVA_VERSION}-set-default

# clean
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/cache/oracle-jdk${JAVA_VERSION}-installer

#make Dir
#RUN mkdir log

# add all files
#ADD *.* /

VOLUME ["./docker"]

#Run mailCRM
#CMD ["sh", "-c", "java -jar mail-crm-0.1.0.jar"]
#CMD  ["tail", "-f", "./docker/test.txt"]