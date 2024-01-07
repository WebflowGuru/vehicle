// Your data, you might fetch this from an API or load from an Excel sheet
const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009]; // Example years
const makes = ["Audi", "Bentley", "BMW", "Cadillac", "Chevrolet", "Chrysler", "Fiat", "Ford", "Honda", "Hyundai", "Jeep", "Kia", "Lexus", "Lincoln", "Lucid", "Mercedes_Benz", "MINI", "Mitsubishi", "Nissan", "Polestar_Automotive", "Porsche", "Rivian", "smart_USA", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"]; // Example makes
const models = {
    Audi: ["A3 e-tron", "A3 e-tron ultra", "A7 TFSI e Quattro", "A8 L 60 TFSI e Quattro", "A8L PHEV", "e-tron", "e-tron Sportback", "Q5 PHEV", "Q5 TFSI e Quattro"],
    Bentley: ["Bentayga Hybrid SUV"],
    BMW: ["330e", "330e xDrive", "530e", "530e xDrive", "740e", "740e xDrive", "745e xDrive", "i3 (60 Ah) Sedan", "i3 Sedan", "i3 Sedan with Range Extender", "i3s Sedan", "i3s Sedan with Range Extender", "i4 Gran Coupe", "i8", "i8 Coupe", "i8 Roadster", "X3 xDrive30e", "X5 xDrive40e", "X5 xDrive45e"],
    Cadillac: ["ELR"],
    Chevrolet: ["Bolt", "Bolt EV", "Bolt EV EUV", "Spark EV", "Volt"],
    Chrysler: ["Pacifica PHEV"],
    Fiat: ["500e"],
    Ford: ["Escape Plug-in Hybrid", "Focus Electric", "Fusion Energi", "Mustang Mach-E"],
    Honda: ["Clarity Plug-in Hybrid"],
    Hyundai: ["Ioniq Electric Battery Vehicle", "Ioniq Plug-In Hybrid Electric Vehicle", "Kona Electric Vehicle", "Nexo Blue Fuel Cell Vehicle", "Nexo Fuel Cell Vehicle", "Sonata Plug-In Hybrid Vehicle"],
    Jeep: ["Wrangler 4xe"],
    Kia: ["Niro EV", "Niro PHEV", "Optima PHEV", "Soul EV"],
    Lexus: ["NX Plug-In Hybrid"],
    Lincoln: ["Aviator Grand Touring", "Corsair Grand Touring"],
    Lucid: ["Air (All Models)"],
    Mercedes_Benz: ["B-Class EV (B250e)", "EQB SUV (All Models)", "EQS Sedan (All Models)", "GLC350e 4matic", "GLC350e 4matic EQ", "GLE550e 4matic PHEV", "S550e PHEV", "S560e EQ PHEV"],
    MINI: ["Cooper S E Countryman ALL4", "Cooper S E Hardtop"],
    Mitsubishi: ["i-MiEV", "Outlander PHEV"],
    Nissan: ["Leaf (All Models)"],
    Polestar_Automotive: ["Polestar 1", "Polestar 2"],
    Porsche: ["Cayenne E-Hybrid (All models)", "Cayenne E-Hybrid (All Models)", "Panamera E-Hybrid (All models)", "Panamera E-Hybrid (All Models)", "Taycan (All EV Models)", "Taycan (All Models)"],
    Rivian: ["EDV 700", "Rivian", "Rivian"],
    smart_USA: ["Cabrio EV", "Coupe EV", "EQ Fortwo Cabrio", "EQ Fortwo Coupe"],
    Subaru: ["Crosstrek Hybrid", "Crosstrek Plug-In Hybrid"],
    Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Roadster"],
    Toyota: ["Mirai", "Prius Prime Plug-In Hybrid", "RAV4 EV", "RAV4 Prime Plug-In Hybrid"],
    Volkswagen: ["e-Golf", "ID.4 (All Models)"],
    Volvo: ["C40 Recharge", "S60", "S90", "V60", "XC40 Recharge", "XC60", "XC90"],
}; // Example models

// Populate the year dropdown
const yearDropdown = document.getElementById("year");
years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.text = year;
    yearDropdown.add(option);
});

// Populate the make dropdown
const makeDropdown = document.getElementById("make");
makes.forEach(make => {
    const option = document.createElement("option");
    option.value = make;
    option.text = make;
    makeDropdown.add(option);
});

// Populate the model dropdown based on the selected make
makeDropdown.addEventListener("change", () => {
    const selectedMake = makeDropdown.value;
    const modelDropdown = document.getElementById("model");
    modelDropdown.innerHTML = ""; // Clear previous options

    models[selectedMake].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.text = model;
        modelDropdown.add(option);
    });
});




// Add an event listener for when the user selects a model
const modelDropdown = document.getElementById("model");
modelDropdown.addEventListener("change", checkQualification);

// Function to check qualification and update the badge
function checkQualification() {
    const selectedYear = document.getElementById("year").value;
    const selectedMake = document.getElementById("make").value;
    const selectedModel = document.getElementById("model").value;

    // Use your logic to check qualification based on the selected year, make, and model
    const isQualified = checkQualificationInExcel(selectedYear, selectedMake, selectedModel);

    // Update the badge
    const qualificationBadge = document.getElementById("qualification-badge");
    qualificationBadge.textContent = isQualified ? "You Appear to Qualify" : "You Don't Appear to Qualify";
    qualificationBadge.style.backgroundColor = isQualified ? "green" : "red";
}




function checkQualificationInExcel(year, make, model) {
    // Implement your logic to check qualification based on Excel sheet data
    // For example, you might have an array of valid combinations
    const validCombinations = [
        { year: 2022, make: "BMW", model: "i4 Gran Coupe" },
        { year: 2022, make: "Chevrolet", model: "Bolt EV" },
        { year: 2022, make: "Chevrolet", model: "Bolt EV EUV" },
        { year: 2022, make: "Lexus", model: "NX Plug-In Hybrid" },
        { year: 2022, make: "Lucid", model: "Air (All Models)" },
        { year: 2022, make: "Mercedes_Benz", model: "EQB SUV (All Models)" },
        { year: 2022, make: "Mercedes_Benz", model: "EQS Sedan (All Models)" },
        { year: 2022, make: "Porsche", model: "Cayenne E-Hybrid (All Models)" },
        { year: 2022, make: "Porsche", model: "Panamera E-Hybrid (All Models)" },
        { year: 2022, make: "Porsche", model: "Taycan (All Models)" },
        { year: 2022, make: "Rivian", model: "EDV 700" },
        { year: 2022, make: "Rivian", model: "R1S" },
        { year: 2022, make: "Rivian", model: "R1T" },
        { year: 2022, make: "Subaru", model: "Crosstrek Hybrid" },
        { year: 2022, make: "Volvo", model: "C40 Recharge" },
        { year: 2021, make: "Audi", model: "A7 TFSI e Quattro" },
        { year: 2021, make: "Audi", model: "A8 L 60 TFSI e Quattro" },
        { year: 2021, make: "Audi", model: "Q5 TFSI e Quattro" },
        { year: 2021, make: "BMW", model: "330e xDrive" },
        { year: 2021, make: "BMW", model: "X5 xDrive45e" },
        { year: 2021, make: "Ford", model: "Mustang Mach-E"},
        { year: 2021, make: "Jeep", model: "Wrangler 4xe" },
        { year: 2021, make: "Lincoln", model: "Corsair Grand Touring" },
        { year: 2021, make: "Polestar_Automotive", model: "Polestar 2" },
        { year: 2021, make: "Toyota", model: "RAV4 Prime Plug-In Hybrid" },
        { year: 2021, make: "Volkswagen", model: "ID.4 (All Models)" },
        { year: 2021, make: "Volvo", model: "XC40 Recharge" },
        { year: 2020, make: "Audi", model: "A8L PHEV" },
        { year: 2020, make: "Audi", model: "e-tron Sportback" },
        { year: 2020, make: "Audi", model: "Q5 PHEV" },
        { year: 2020, make: "Bentley", model: "Bentayga Hybrid SUV" },
        { year: 2020, make: "BMW", model: "745e xDrive" },
        { year: 2020, make: "BMW", model: "X3 xDrive30e" },
        { year: 2020, make: "Ford", model: "Escape Plug-in Hybrid" },
        { year: 2020, make: "Lincoln", model: "Aviator Grand Touring" },
        { year: 2020, make: "Mercedes_Benz", model: "GLC350e 4matic EQ" },
        { year: 2020, make: "Mercedes_Benz", model: "S560e EQ PHEV" },
        { year: 2020, make: "MINI", model: "Cooper S E Hardtop" },
        { year: 2020, make: "Polestar_Automotive", model: "Polestar 1" },
        { year: 2020, make: "Porsche", model: "Taycan (All EV Models)" },
        { year: 2020, make: "Tesla", model: "Model Y" },
        { year: 2020, make: "Volvo", model: "V60" },
        { year: 2019, make: "Audi", model: "e-tron" },
        { year: 2019, make: "BMW", model: "i8 Roadster" },
        { year: 2019, make: "Hyundai", model: "Kona Electric Vehicle" },
        { year: 2019, make: "Hyundai", model: "Nexo Blue Fuel Cell Vehicle" },
        { year: 2019, make: "Hyundai", model: "Nexo Fuel Cell Vehicle" },
        { year: 2019, make: "Kia", model: "Niro EV" },
        { year: 2019, make: "smart_USA", model: "EQ Fortwo Cabrio" },
        { year: 2019, make: "smart_USA", model: "EQ Fortwo Coupe" },
        { year: 2019, make: "Subaru", model: "Crosstrek Plug-In Hybrid" },
        { year: 2019, make: "Volvo", model: "S60" },
        { year: 2018, make: "BMW", model: "530e" },
        { year: 2018, make: "BMW", model: "530e xDrive" },
        { year: 2018, make: "BMW", model: "740e xDrive" },
        { year: 2018, make: "BMW", model: "i3s Sedan" },
        { year: 2018, make: "BMW", model: "i3s Sedan with Range Extender" },
        { year: 2018, make: "Honda", model: "Clarity Plug-in Hybrid" },
        { year: 2018, make: "Hyundai", model: "Ioniq Plug-In Hybrid Electric Vehicle" },
        { year: 2018, make: "Kia", model: "Niro PHEV" },
        { year: 2018, make: "Mercedes_Benz", model: "GLC350e 4matic" },
        { year: 2018, make: "MINI", model: "Cooper S E Countryman ALL4" },
        { year: 2018, make: "Mitsubishi", model: "Outlander PHEV" },
        { year: 2018, make: "Volvo", model: "S90" },
        { year: 2018, make: "Volvo", model: "XC60" },
        { year: 2017, make: "BMW", model: "740e" },
        { year: 2017, make: "BMW", model: "i3 (60 Ah) Sedan" },
        { year: 2017, make: "Chevrolet", model: "Bolt" },
        { year: 2017, make: "Chrysler", model: "Pacifica PHEV" },
        { year: 2017, make: "Hyundai", model: "Ioniq Electric Battery Vehicle" },
        { year: 2017, make: "Kia", model: "Optima PHEV" },
        { year: 2017, make: "Tesla", model: "Model 3" },
        { year: 2017, make: "Toyota", model: "Prius Prime Plug-In Hybrid" },
        { year: 2016, make: "Audi", model: "A3 e-tron" },
        { year: 2016, make: "Audi", model: "A3 e-tron ultra" },
        { year: 2016, make: "BMW", model: "330e" },
        { year: 2016, make: "BMW", model: "X5 xDrive40e" },
        { year: 2016, make: "Hyundai", model: "Sonata Plug-In Hybrid Vehicle" },
        { year: 2016, make: "Mercedes_Benz", model: "GLE550e 4matic PHEV" },
        { year: 2016, make: "Tesla", model: "Model X" },
        { year: 2016, make: "Toyota", model: "Mirai" },
        { year: 2016, make: "Volvo", model: "XC90" },
        { year: 2015, make: "Kia", model: "Soul EV" },
        { year: 2015, make: "Mercedes_Benz", model: "S550e PHEV" },
        { year: 2015, make: "Porsche", model: "Cayenne E-Hybrid (All models)" },
        { year: 2015, make: "Volkswagen", model: "e-Golf" },
        { year: 2014, make: "BMW", model: "i3 Sedan" },
        { year: 2014, make: "BMW", model: "i3 Sedan with Range Extender" },
        { year: 2014, make: "BMW", model: "i8" },
        { year: 2014, make: "BMW", model: "i8 Coupe" },
        { year: 2014, make: "Cadillac", model: "ELR" },
        { year: 2014, make: "Chevrolet", model: "Spark EV" },
        { year: 2014, make: "Mercedes_Benz", model: "B-Class EV (B250e)" },  
        { year: 2014, make: "Porsche", model: "Panamera E-Hybrid (All models)" },
        { year: 2013, make: "Fiat", model: "500e" },
        { year: 2013, make: "Ford", model: "C-Max Energi" },
        { year: 2013, make: "Ford", model: "Focus Electric" },
        { year: 2013, make: "Ford", model: "Fusion Energi" },
        { year: 2013, make: "smart_USA", model: "Cabrio EV" },
        { year: 2013, make: "smart_USA", model: "Coupe EV" },
        { year: 2012, make: "Mitsubishi", model: "i-MiEV" },
        { year: 2012, make: "Tesla", model: "Model S" },
        { year: 2012, make: "Toyota", model: "RAV4 EV" },
        { year: 2011, make: "Chevrolet", model: "Volt" },
        { year: 2011, make: "Nissan", model: "Leaf (All Models)" },
        { year: 2009, make: "Tesla", model: "Roadster" },
        // Add more valid combinations as needed
    ];

    // Check if the selected combination is in the valid combinations array
    return validCombinations.some(combination => 
        combination.year == year && combination.make == make && combination.model == model
    );
}

