describe("karma initial test", function(){

    var helloInEnglish = sayHelloInEnglish();
    var helloInSpanish = sayHelloInSpanish();

    it("should say hello in english and spanish", function() {
        expect(helloInEnglish).toEqual("Hello");
        expect(helloInSpanish).toEqual("Hola");
    });
});