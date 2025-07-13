package com.who.auto

import io.gatling.recorder.GatlingRecorder
import io.gatling.recorder.config.RecorderPropertiesBuilder
import com.who.auto.IDEPathHelper

object Recorder extends App {

	val props = new RecorderPropertiesBuilder
	props.simulationOutputFolder(IDEPathHelper.recorderOutputDirectory.toString)
	props.simulationPackage("GatlingTests.com.who.auto")
	props.bodiesFolder(IDEPathHelper.bodiesDirectory.toString)

	GatlingRecorder.fromMap(props.build, Some(IDEPathHelper.recorderConfigFile))
}
