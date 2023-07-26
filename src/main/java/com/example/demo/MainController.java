package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @GetMapping("/sbb")
//    public void index(){
//        System.out.println("index");
//
//    }
    @ResponseBody
    public String index(){
        return "sbb에 오신것을 환영합니다";
    }

//    @GetMapping("/")
//    public String root() {
//        return "redirect:/question/list";
//    }

}
