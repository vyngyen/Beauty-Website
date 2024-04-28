async function fetchAIResponse(message) {
    message = message.toLowerCase().trim(); // Normalize the message to lower case for easier comparison

    switch (true) {
        case message.includes('foundation'):
            return "Foundation provides a smooth base for your makeup, covering flaws and evening out skin tone.";
        case message.includes('mascara'):
            return "Mascara helps to enhance the eyes by thickening, lengthening, and darkening your lashes.";
        case message.includes('lipstick'):
            return "Lipstick adds color and texture to your lips, and can also moisturize or plump them depending on the formula.";
        case message.includes('blush'):
            return "Blush is used to add a flush of color to the cheeks, mimicking a natural, healthy glow.";
        case message.includes('eyeshadow'):
            return "Eyeshadow can add depth and dimension to your eyes, complement your eye color, or simply draw attention to the eyes.";
        case message.includes('eco-friendly'):
            return "Eco-friendly products are designed to have minimal impact on the environment, often using sustainable ingredients and packaging.";
        case message.includes('serum'):
            return "Serum is a skincare product you can apply to your skin after cleansing but before moisturizing with the intent to deliver powerful ingredients directly into the skin.";
        case message.includes('moisturizer'):
            return "Moisturizers help in hydrating and softening the skin. They can seal in moisture and protect the skin barrier.";
        case message.includes('cleanser'):
            return "Cleansers are used to remove dirt, oil, and other unwanted debris. They are the first step in any skincare routine.";
        case message.includes('toner'):
            return "Toner removes any last traces of dirt, grime and impurities stuck in your pores after you wash your face.";
        default:
            return "I'm sorry, I don't have information on that topic. Could you ask about something else?";
    }
}