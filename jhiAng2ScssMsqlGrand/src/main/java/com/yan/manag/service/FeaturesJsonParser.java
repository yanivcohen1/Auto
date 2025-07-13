package com.yan.manag.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.json.simple.JSONObject;

import com.yan.manag.domain.Embedding;
import com.yan.manag.domain.Feature;
import com.yan.manag.domain.Senario;
import com.yan.manag.domain.Step;
import java.util.UUID;

@Service
public class FeaturesJsonParser {

	private static final Logger log = LoggerFactory.getLogger(FeaturesJsonParser.class);
	
	@Autowired
	GridFsOperations gridOperations;
	
	public static void main1(String[] args) throws IOException, ParseException {
		// byte[] res = readFile("x1.2f93p16x1.c9cp16-x1.d9a5p16-x1.982cp16-x1.e219p16-x1.2da1p16x1.3e4bp16x1.1c1ap16");
		File fileNameInFile = new File("C:/Git/jhiAng2ScssMsqlGrand/reports/json/cucumber_report.json");
		InputStream targetStream = new FileInputStream(fileNameInFile);
		List<Feature> features = new ArrayList<Feature>();
		addFeatures(targetStream, features);
		System.out.println("out");
	}

	//C:\Git\XBDD\src\main\java\xbdd\webapp\resource\feature
	//Attachment
	//Report -> putReport(), embedSteps()
	//UploadAttachment
	public static void addFeatures(InputStream fileInputStream, List<Feature> features) throws IOException, ParseException {
		Reader targetReader = new InputStreamReader(fileInputStream);
		//FileReader reader = new FileReader(fileNameInFile.getAbsoluteFile());
		JSONParser jsonParser = new JSONParser();
		JSONArray featuresArry = (JSONArray) jsonParser.parse(targetReader);
		for (Object _feature : featuresArry) {//Feature loop
			Feature feature = new Feature();
			JSONObject jsonFeature = (JSONObject) _feature;
			feature.setLine(!jsonFeature.containsKey("line") ? (int) -1 : Integer.valueOf(jsonFeature.get("line").toString()));
			feature.setName(!jsonFeature.containsKey("name") ? "N/A" : jsonFeature.get("name").toString());
			feature.setUri(!jsonFeature.containsKey("uri") ? "N/A" : jsonFeature.get("uri").toString());
			feature.set_id(!jsonFeature.containsKey("id") ? "" : jsonFeature.get("id").toString());
			feature.setId(UUID.randomUUID().toString());
			System.out.println("--featureName:  "+ feature.getName());
			System.out.println("----------------------------------");
			JSONArray elementsArry = (JSONArray)(jsonFeature).get("elements");
			for (Object _senario : elementsArry) {//Scenario loop
				JSONObject jsonElement = (JSONObject) _senario;
				Senario senario = new Senario();
				senario.setId(UUID.randomUUID().toString());
				senario.setLine(!jsonElement.containsKey("line") ? (int) -1 : Integer.valueOf(jsonElement.get("line").toString()));
				senario.setName(!jsonElement.containsKey("name") ? "N/A" : jsonElement.get("name").toString());
				senario.set_id(!jsonElement.containsKey("id") ? "" : jsonElement.get("id").toString());
				System.out.println("----ScenarioName:  "+ senario.getName());
				if (jsonElement.containsKey("tags")) {
					JSONArray tagsArry = (JSONArray)(jsonElement).get("tags");
					senario.setTags((senario.getTags() == null) ? new ArrayList<String>() : senario.getTags());
						for (Object tag : tagsArry) {//tags loop
							JSONObject jsontag = (JSONObject) tag;
							senario.getTags().add(!jsontag.containsKey("name") ? "" : jsontag.get("name").toString());
							System.out.println("------TagName:  " + jsontag.get("name").toString());
						} 
				}
				JSONArray stepsArry = (JSONArray)(jsonElement).get("steps");
				senario.setSteps((senario.getSteps() == null) ? new ArrayList<Step>() : senario.getSteps());
				for (Object _step : stepsArry) {//steps loop
					JSONObject jsonstep = (JSONObject) _step;
					Step step = new Step();
					if (jsonstep.containsKey("result")) {
						JSONObject result = (JSONObject)jsonstep.get("result");
						step.setDuration(!result.containsKey("duration") ? (int) -1 : Integer.valueOf(result.get("duration").toString()));
						step.setStatus(!result.containsKey("status") ? "" : result.get("status").toString());
					}
					step.setName(!jsonstep.containsKey("name") ? jsonstep.get("keyword").toString() : 
						jsonstep.get("keyword").toString() + jsonstep.get("name").toString());
					step.setHidden(!jsonstep.containsKey("hidden") ? false : Boolean.valueOf(jsonstep.get("hidden").toString()));
					step.setLine(!jsonstep.containsKey("line") ? (int) -1 : Integer.valueOf(jsonstep.get("line").toString()));
					step.setLocation(!jsonstep.containsKey("match") ? "" : ((JSONObject)jsonstep.get("match")).get("location").toString());
					step.setBackground(!jsonstep.containsKey("isBackground") ? false : Boolean.valueOf(jsonstep.get("isBackground").toString()));
					System.out.println("------stepName:  "+ step.getName());
					if (jsonstep.containsKey("embeddings")) {
						JSONArray embeddingsArry = (JSONArray)(jsonstep).get("embeddings");
						step.setEmbedding((step.getEmbedding() == null) ? new ArrayList<Embedding>() : step.getEmbedding());
						for (Object _embedding : embeddingsArry) {//embeddings loop
							JSONObject jsonembedding = (JSONObject) _embedding;
							Embedding embedding = new Embedding();
							embedding.setMime_type(!jsonembedding.containsKey("mime_type") ? "N/A" : jsonembedding.get("mime_type").toString());
							if (embedding.getMime_type().contentEquals("text/plain")) {
								embedding.setMessage(!jsonembedding.containsKey("data") ? "" : jsonembedding.get("data").toString());
							}else{
								// Store file to MongoDB
								//DBObject metaData = new BasicDBObject();
								//metaData.put("type", "image");
								//ByteArrayInputStream iamgeStream = new ByteArrayInputStream(Base64.decodeBase64(((String) jsonembedding.get("data")).getBytes()));
								//String imageFileId = gridOperations.store(iamgeStream, UUID.randomUUID().toString() + ".png", "image/png", metaData).getId().toString();
								//embedding.setFileID(imageFileId);
							}
							System.out.println("--------mime_type:  "+ embedding.getMime_type());
							System.out.println("--------message:  "+ embedding.getMessage());
							step.getEmbedding().add(embedding);
						}
					}
					senario.getSteps().add(step);
				}
				//name = ((city.getName() == null) ? "N/A" : city.getName());
				if (feature.getSenario() == null){
					feature.setSenario(new ArrayList<Senario>() {{
					    add(senario);
					}});
				}else{
					feature.getSenario().add(senario);
				}
			}
			features.add(feature);
		}
	}

	public static void updateSenarios(List<Senario> senarions, ArrayList<Feature> features) throws IOException, ParseException {
		
	}
	
}
