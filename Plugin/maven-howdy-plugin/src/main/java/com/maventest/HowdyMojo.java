package com.maventest;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;

/**
 * This goal will say a message.
 * 
 * @goal howdy-world
 */
public class HowdyMojo extends AbstractMojo {

	/**
     * @parameter expression="${url}"
     */
    private String url;
    
    /**
     * @parameter expression="${url2}"
     */
    private String url2;
    
	public void execute() throws MojoExecutionException {

		getLog().info("Hi there Yaniv!!!" + url + '\n' + url2);
	}
}