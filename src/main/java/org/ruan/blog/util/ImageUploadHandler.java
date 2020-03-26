package org.ruan.blog.util;

import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Decoder;

import java.io.*;
import java.util.Map;
import java.util.UUID;

/**
 * 文件上传
 */
public class ImageUploadHandler {

    /**
     * base64文件解码
     *
     * @param base64ImageStr
     * @param filePath
     * @return
     * @throws IOException
     */
    public static boolean uploadBase64Img(String base64ImageStr, String filePath) {
        try {
            //解码base64
            BASE64Decoder decoder = new BASE64Decoder();
            byte[] data = decoder.decodeBuffer(base64ImageStr);
            for (int i = 0; i < data.length; i++) {
                if (data[i] < 0) {
                    data[i] += 256;
                }
            }
            //字节流输出图片
            FileOutputStream fos = new FileOutputStream(filePath);
            fos.write(data);
            fos.flush();
            fos.close();
            return true;
        } catch (IOException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    /**
     * 图片上传
     *
     * @param multipartFiles 图片控件组
     * @param map            图片记录，用于传回上传成功后图片的名称
     * @param path
     * @return 使用方法*
     * Map<MultipartFile,String> map=UploadUtil.uploadUserImg(attachs,new HashMap<MultipartFile, String>(),path);
     * xx.setXx(map.get(attachs[0]));
     * xx.setXx(map.get(attachs[1]));
     */
    public static Map<MultipartFile, String> uploadImage(MultipartFile[] multipartFiles,
                                                         Map<MultipartFile, String> map,
                                                         String path) {
        for (int i = 0; i < 1; i++) {
            MultipartFile multipartFile = multipartFiles[i];
            if (multipartFile != null && !multipartFile.isEmpty()) {
                String fileName = UUID.randomUUID().toString().replace("-", "") + ".jpg";

                File target = new File(path, fileName);
                if (!target.exists()) {
                    target.mkdirs();
                }
                //保存
                try {
                    multipartFile.transferTo(target);
                } catch (IOException e) {
                    e.printStackTrace();
                    throw new RuntimeException("图片传输失败");
                }
                map.put(multipartFile, fileName);
            }
        }
        return map;
    }

    /**
     * 图片上传
     *
     * @param multipartFile
     * @param path
     * @return
     */
    public static String uploadImage(MultipartFile multipartFile, String path) {
        if (multipartFile != null && !multipartFile.isEmpty()) {
            String fileName = UUID.randomUUID().toString().replace("-", "") + ".jpg";

            File target = new File(path, fileName);
            if (!target.exists()) {
                target.mkdirs();
            }
            //保存
            try {
                multipartFile.transferTo(target);
            } catch (IOException e) {
                e.printStackTrace();
                throw new RuntimeException("图片传输失败");
            }
            return fileName;
        }
        return null;
    }
}
