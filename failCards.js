//chef, customer, lawyer, critic

failCards = [
  {
  resource:"loyalty", 
  level: "high", 
  card: {
    prompt: "Your employees love you so much that they decide to throw a party! The candles end up setting the building on fire and you suffocate in the smoke.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "chef",
    resultText: "",
    image: "./images/legumes.jpg"
  }  
},
{
  resource:"loyalty", 
  level: "low", 
  card: {
    prompt: "Your employees hate you so much that they decide to revolt. They set up a guillotine using a kitchen cleaver. Off with your head.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "chef",
    resultText: "",
    image: "./images/legumes.jpg"
  }  
},
]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "You made a mistake",
  image: "./images/legumes.jpg"
}