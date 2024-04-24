// test.js

const express = require("express");
const router = express.Router();
const axios = require("axios");
const converter = require("xml-js");

const url = `http://data.gb.go.kr/opendata/service/rest/gyeongjuFood?_wadl&_type=xml`;

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(url); // 외부 API에 요청을 보냄
        const xmlData = response.data;

        // XML을 JSON으로 변환
        const jsonData = converter.xml2json(xmlData, { compact: true, spaces: 4 });
        
        res.send(jsonData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data from the external API");
    }
});

module.exports = router;
