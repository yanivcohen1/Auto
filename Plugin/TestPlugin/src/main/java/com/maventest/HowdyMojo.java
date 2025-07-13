package com.maventest;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;

/**
 * This goal will say a message.
 * 
 * @goal howdy-world
 */
public class HowdyMojo extends AbstractMojo {

	public void execute() throws MojoExecutionException {

		getLog().info("Hi there Yaniv1!!!");
	}
}