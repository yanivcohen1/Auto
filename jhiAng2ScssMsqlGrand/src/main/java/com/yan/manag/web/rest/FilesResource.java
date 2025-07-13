package com.yan.manag.web.rest;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.firefox.FirefoxProfile;
//import org.openqa.selenium.remote.CapabilityType;
//import org.openqa.selenium.remote.DesiredCapabilities;
//import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.http.MediaType;

import com.google.common.primitives.Ints;
import com.codahale.metrics.annotation.Timed;
import com.yan.manag.domain.Authority;
import com.yan.manag.domain.Suite;
import com.yan.manag.domain.Tests;
import com.yan.manag.domain.User;
import com.yan.manag.repository.SuiteRepository;
import com.yan.manag.repository.TestsRepository;
import com.yan.manag.repository.UserRepository;
import com.yan.manag.security.AuthoritiesConstants;
import com.yan.manag.security.SecurityUtils;
import com.yan.manag.service.JenkinsService;
import com.yan.manag.service.MailService;
import com.yan.manag.service.UserService;
//import yan.tests.maneg.service.dto.ManualTestInDTO;
//import yan.tests.maneg.service.dto.ManualTestOutDTO;
import com.yan.manag.service.dto.RunTestsDTO;
import com.yan.manag.service.dto.UserDTO;
import com.yan.manag.files.util.FileSystemStorageService;
import com.yan.manag.files.util.StorageService;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
//http://localhost:8080/ngSuitesManage/rest/suites/
public class FilesResource {

	private final Logger log = LoggerFactory.getLogger(FilesResource.class);
	//private static List<WebDriver> index = Collections.synchronizedList(new ArrayList<WebDriver>());
	private final StorageService storageService;

    @Autowired
    public FilesResource(StorageService storageService) {
        this.storageService = storageService;
    }
    
    //http://localhost:8080/api/upload/{file_name}
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @GetMapping("/upload/{filename:.+}")
    @ResponseBody
    @Timed
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
    
	//curl.exe -k -F file=@C:\Temp\package.json http://localhost:8080/api/upload/
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
	@PostMapping("/upload")
    @Timed
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
            RedirectAttributes redirectAttributes) {

        storageService.store(file);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
    }
    
}
