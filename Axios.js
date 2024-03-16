const express = require('express');
const axios = require('axios');  // เชื่อมข้อมูลฟ้อนกับแบ้ก
const path = require("path"); //จัดการเส้นทางของไฟล์ต่างๆ
const app = express();
var bodyParser = require('body-parser'); //ช่วงอ่านข้อมูลแปลงไฟล์ต่างๆมาเป็น

const base_url = "http://localhost:3000"; 

app.set("views",path.join(__dirname,"/public/views"));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/public'));

app.get("/",async(req, res) => {
    try {
        const response = await axios.get(base_url + '/ThaiSongs');
        const response1 = await axios.get(base_url + '/EngSongs');
        const response2 = await axios.get(base_url + '/KoreanSongs');
        res.render("Music", { ThaiSongs: response.data, EngSongs: response1.data, KoreanSongs: response2.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/EditThaiSongs/:id", async (req, res) => {
    try{
        const response = await axios.get(base_url + '/ThaiSongs/' + req.params.id);
        console.log(response)
        res.render("EditThaiSongs", { ThaiSongs: response.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/EditThaiSongs/:id", async (req, res) => {
    try{
        const data = {namesong: req.body.namesong, artist: req.body.artist };
        await axios.put(base_url + '/ThaiSongs/'+ req.params.id,data);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/EditEngSongs/:id", async (req, res) => {
    try{
        const response = await axios.get(base_url + '/EngSongs/' + req.params.id);
        console.log(response)
        res.render("EditEngSongs", { EngSongs: response.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/EditEngSongs/:id", async (req, res) => {
    try{
        const data = {namesong: req.body.namesong, artist: req.body.artist };
        await axios.put(base_url + '/EngSongs/'+ req.params.id,data);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/EditKoreanSongs/:id", async (req, res) => {
    try{
        const response = await axios.get(base_url + '/KoreanSongs/' + req.params.id);
        console.log(response)
        res.render("EditKoreanSongs", { KoreanSongs: response.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/EditKoreanSongs/:id", async (req, res) => {
    try{
        const data = {namesong: req.body.namesong, artist: req.body.artist };
        await axios.put(base_url + '/KoreanSongs/'+ req.params.id,data);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/DeleteThaiSongs/:id", async (req, res) => {
    try{
        await axios.delete(base_url + '/ThaiSongs/'+ req.params.id);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/DeleteEngSongs/:id", async (req, res) => {
    try{
        await axios.delete(base_url + '/EngSongs/'+ req.params.id);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/DeleteKoreanSongs/:id", async (req, res) => {
    try{
        await axios.delete(base_url + '/KoreanSongs/'+ req.params.id);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/ViewThaiSongs/:id", async (req, res) => {
    try{
        const response = await axios.get(base_url + '/ThaiSongs/' + req.params.id);
        console.log(response)
        res.render("ViewThaiSongs", { ThaiSongs: response.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/ViewEngSongs/:id", async (req, res) => {
    try{
        const response = await axios.get(base_url + '/EngSongs/' + req.params.id);
        console.log(response)
        res.render("ViewEngSongs", { EngSongs: response.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/ViewKoreanSongs/:id", async (req, res) => {
    try{
        const response = await axios.get(base_url + '/KoreanSongs/' + req.params.id);
        console.log(response)
        res.render("ViewKoreanSongs", { KoreanSongs: response.data});
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/CreateThaiSongs", (req,res) => {
    res.render("CreateThaiSongs");
});

app.post("/CreateThaiSongs",async(req, res) =>{
    try{
        const data = {namesong: req.body.namesong, artist: req.body.artist };
        await axios.post(base_url + '/ThaiSongs',data);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/CreateEngSongs", (req,res) => {
    res.render("CreateEngSongs");
});

app.post("/CreateEngSongs",async(req, res) =>{
    try{
        const data = {namesong: req.body.namesong, artist: req.body.artist };
        await axios.post(base_url + '/EngSongs',data);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/CreateKoreanSongs", (req,res) => {
    res.render("CreateKoreanSongs");
});

app.post("/CreateKoreanSongs",async(req, res) =>{
    try{
        const data = {namesong: req.body.namesong, artist: req.body.artist };
        await axios.post(base_url + '/KoreanSongs',data);
        res.redirect("/");
    } catch (err){
        console.error(err);
        res.status(500).send('Error');
    }
});

app.listen(5500, () => {
    console.log('Sever started on post 5500');
});
