package org.ruan.blog.util;

import java.io.*;

public class LocalIOStreamHandler {
    /**
     * 读取文件
     *
     * @param filePath
     * @return
     */
    public static String readFile(String filePath) {
        String jsonStr = null;
        try {
            //文件
            File jsonFile = new File(filePath);
            //载入字符流
            //FileReader fileReader = new FileReader(jsonFile);
            FileInputStream fileInputStream = new FileInputStream(jsonFile);
            InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream, "utf-8");

            int ch = 0;
            //缓冲区
            StringBuffer sb = new StringBuffer();
            //读取
            while ((ch = inputStreamReader.read()) != -1) {
                sb.append((char) ch);
            }

            inputStreamReader.close();
            fileInputStream.close();
            //fileReader.close();
            jsonStr = sb.toString();
            return jsonStr;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 写文件
     *
     * @param filePath
     * @param content
     */
    public static boolean writeFile(String filePath, String content) {
        try {
            //文件
            File jsonFile = new File(filePath);
            // 如果父目录不存在，创建父目录
            if (!jsonFile.getParentFile().exists()) {
                jsonFile.getParentFile().mkdirs();
            }

            //载入字符流
            //FileWriter fileWriter = new FileWriter(jsonFile);
            //字节流
            FileOutputStream fileOutputStream = new FileOutputStream(jsonFile);
            OutputStreamWriter outputStreamWriter = new OutputStreamWriter(fileOutputStream, "utf-8");

            outputStreamWriter.write(content);
            outputStreamWriter.flush();
            outputStreamWriter.close();
            fileOutputStream.close();
            //fileWriter.write(content);
            //fileWriter.flush();
            //fileWriter.close();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
