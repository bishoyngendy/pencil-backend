package com.pencil;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // parseAnnotations();
        parseQuestions();
    }

    private static void parseAnnotations() {
        Map<String, Set<String>> map = new HashMap<>();
        File file = new File("annotations.txt");
        BufferedReader br;
        try {
            br = new BufferedReader(new FileReader(file));
            String st;
            while ((st = br.readLine()) != null) {
                String[] categoriesPath = st.split("\t");
                for (int i = 0; i < categoriesPath.length; i++) {
                    String curr = categoriesPath[i];
                    if (!map.containsKey(curr)) {
                        map.put(curr, new HashSet<>());
                    }
                    for (int j = i + 1; j < categoriesPath.length; j++) {
                        String next = categoriesPath[j];
                        if (!map.containsKey(next)) {
                            map.put(next, new HashSet<>());
                        }
                        map.get(next).add(curr);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        Gson g = new Gson();
        String json = g.toJson(map);
        System.out.println(json);
    }

    private static void parseQuestions() {
        Map<String, Set<String>> map = new HashMap<>();
        File file = new File("questions.txt");
        BufferedReader br;
        try {
            br = new BufferedReader(new FileReader(file));
            String st;
            while ((st = br.readLine()) != null) {
                String[] items = st.split("\t");
                for (int i = 0; i < items.length; i++) {
                    String curr = items[i];
                    if (i == 0) {
                        map.put(curr, new HashSet<>());
                    } else {
                        map.get(items[0]).add(curr);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        Gson g = new Gson();
        String json = g.toJson(map);
        System.out.println(json);
        System.out.println(map.keySet().size());
    }
}
