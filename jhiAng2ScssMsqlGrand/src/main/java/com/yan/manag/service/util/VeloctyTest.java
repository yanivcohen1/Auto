package com.yan.manag.service.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.ui.velocity.VelocityEngineUtils;

//@Component
public class VeloctyTest {

	@Value("${velocty.message}")
	private String message;

	@Autowired
	private VelocityEngine engine;

	public void test() throws Exception {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("time", new Date());
		model.put("message", this.message);
		//String text = VelocityEngineUtils.mergeTemplateIntoString(engine, "velocty.vm", "UTF-8", model);
		System.out.println(VelocityEngineUtils.mergeTemplateIntoString(this.engine,
				"velocty.vm", "UTF-8", model));
	}

}