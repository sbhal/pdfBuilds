var markdownpdf = require("markdown-pdf")
 
var mdDocs = ["toc.md","ch1.md", "ch2.md", "ch3.md"]
  , pdfPath = "book_up_and_going.pdf"
  , mdPath = "../up & going/"
 
 var mdDocsFullPath = mdDocs.map(function(mdName) {
     return mdPath+mdName;
 }, this);
 
var markdownObjectProps = {
    paperBorder:'0.0cm',
    paperFormat: 'A4'
};
markdownpdf(markdownObjectProps).concat.from(mdDocsFullPath).to(pdfPath, function () {
  console.log("Created", pdfPath)
})


mdDocs = ["toc.md","ch1.md", "ch2.md", "ch3.md", "ch4.md", "ch5.md", "apA.md", "apB.md", "apC.md"]
pdfPath = "book_scopes_and_closures.pdf"
mdPath = "../scope & closures/"
 
mdDocsFullPath = mdDocs.map(function(mdName) {
     return mdPath+mdName;
 }, this);
 
markdownpdf(markdownObjectProps).concat.from(mdDocsFullPath).to(pdfPath, function () {
  console.log("Created", pdfPath)
})

mdDocs = ["toc.md","ch1.md", "ch2.md", "ch3.md", "ch4.md", "ch5.md", "ch6.md", "apA.md"]
pdfPath = "book_this_and_object_prototypes.pdf"
mdPath = "../this & object prototypes/"
 
mdDocsFullPath = mdDocs.map(function(mdName) {
     return mdPath+mdName;
 }, this);
 
markdownpdf(markdownObjectProps).concat.from(mdDocsFullPath).to(pdfPath, function () {
  console.log("Created", pdfPath)
})

mdDocs = ["toc.md","ch1.md", "ch2.md", "ch3.md", "ch4.md", "ch5.md", "apA.md"]
pdfPath = "book_types_and_grammar.pdf"
mdPath = "../types & grammar/"
 
mdDocsFullPath = mdDocs.map(function(mdName) {
     return mdPath+mdName;
 }, this);
 
markdownpdf(markdownObjectProps).concat.from(mdDocsFullPath).to(pdfPath, function () {
  console.log("Created", pdfPath)
})

mdDocs = ["toc.md","ch1.md", "ch2.md", "ch3.md", "ch4.md", "ch5.md", "ch6.md", "apA.md", "apB.md"]
pdfPath = "book_async_and_performance.pdf"
mdPath = "../async & performance/"
 
mdDocsFullPath = mdDocs.map(function(mdName) {
     return mdPath+mdName;
 }, this);
 
markdownpdf(markdownObjectProps).concat.from(mdDocsFullPath).to(pdfPath, function () {
  console.log("Created", pdfPath)
})

mdDocs = ["toc.md","ch1.md", "ch2.md", "ch3.md", "ch4.md", "ch5.md", "ch6.md", "ch7.md", "ch8.md"]
pdfPath = "book_es6_and_beyond.pdf"
mdPath = "../es6 & beyond/"
 
mdDocsFullPath = mdDocs.map(function(mdName) {
     return mdPath+mdName;
 }, this);
 
markdownpdf(markdownObjectProps).concat.from(mdDocsFullPath).to(pdfPath, function () {
  console.log("Created", pdfPath)
})
