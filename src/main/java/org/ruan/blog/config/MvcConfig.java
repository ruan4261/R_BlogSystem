package org.ruan.blog.config;

import org.ruan.blog.component.LangLocaleResolver;
import org.ruan.blog.interceptor.ErrorPageInterceptor;
import org.ruan.blog.interceptor.HandleInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ErrorPageInterceptor())
                .addPathPatterns("/**");
        registry.addInterceptor(new HandleInterceptor())
                .addPathPatterns("/lain/**")
                .addPathPatterns("/handle/**");
    }

    @Bean
    public LocaleResolver localeResolver() {
        return new LangLocaleResolver();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resource/image/**").addResourceLocations("file:C:/data/Blog/articleImages/");
        registry.addResourceHandler("/pub/**").addResourceLocations("file:C:/data/pub/");
    }

}
