package com.yan.manag.web.rest;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.gridfs.GridFsOperations;

import com.yan.manag.files.util.StorageService;
import com.yan.manag.security.AuthoritiesConstants;
import com.yan.manag.web.rest.util.HeaderUtil;
import com.mongodb.gridfs.GridFSDBFile;
import com.codahale.metrics.annotation.Timed;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/api")
@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
//http://localhost:8080/ngSuitesManage/rest/suites/
public class GetAttachmentResource {

	private final Logger log = LoggerFactory.getLogger(GetAttachmentResource.class);
	//private static List<WebDriver> index = Collections.synchronizedList(new ArrayList<WebDriver>());
	
    @Autowired
    public GetAttachmentResource(StorageService storageService) {
        this.storageService = storageService;
    }
	
	@Autowired
	GridFsOperations gridOperations;

	private final StorageService storageService;
    
	/**
     * GET  /getAttachment.
     */
	@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
	@GetMapping("/attachment/{id}")
    @Timed
	public ResponseEntity<byte[]> getAttachment(@PathVariable String id) throws IOException {
		GridFSDBFile imageFile = gridOperations.findOne(new org.springframework.data.mongodb.core.query.Query(Criteria.where("_id").is(id)));
		// log.info(file);
		if (imageFile == null) {
			return new ResponseEntity<>(null , HeaderUtil.createFailureAlert("file not find", "idexists", "File with this ID not find"), HttpStatus.NOT_FOUND);
		}
		return ResponseEntity.ok().header(imageFile.getContentType()).body(org.apache.commons.io.IOUtils.toByteArray(imageFile.getInputStream()));

	}
    
	//curl.exe -k -F file=@C:\Temp\package.json http://localhost:8080/api/attachment/
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
	@PostMapping("/attachment")
    @Timed
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
    		@RequestParam("myData") String myData,
            RedirectAttributes redirectAttributes) {

        storageService.store(file);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
    }
}
