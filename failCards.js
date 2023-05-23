//chef, customer, acct, critic

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
    image: "./images/chef.svg"
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
    image: "./images/chef.svg"
  }  
},
{
  resource:"money", 
  level: "high", 
  card: {
    prompt: "You have so much money that it overflows the building and you suffocate.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "accountant",
    resultText: "",
    image: "./images/accountant.svg"
  }  
},
{
  resource:"money", 
  level: "low", 
  card: {
    prompt: "You run out of money and are forced to shut down the business. As you're moving the equipment, a frying pan falls on your head.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "accountant",
    resultText: "",
    image: "./images/accountant.svg"
  }  
},
{
  resource:"ingredients", 
  level: "high", 
  card: {
    prompt: "You have so many ingredients that your chefs begin throwing excess food outside the window. A large gobstopper falls on your head as you pass by.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "critic",
    resultText: "",
    image: "./images/critic.svg"
  }  
},
{
  resource:"ingredients", 
  level: "low", 
  card: {
    prompt: "Your business completely runs out of ingredients and is forced to sell roadkill. This causes a global zombie pandemic which you are quickly swept up in.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "critic",
    resultText: "",
    image: "./images/critic.svg"
  }  
},
{
  resource:"ratings", 
  level: "high", 
  card: {
    prompt: "With your ratings at peak height, customers flood your establishment. You are killed in the chaos.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "customer",
    resultText: "",
    image: "./images/customer.svg"
  }  
},
{
  resource:"ratings", 
  level: "low", 
  card: {
    prompt: "With your ratings at an all time low, no customers enter your restaurant. A tumbleweed hits you in the head, fatally wounding you.",
    rightChoiceText: "Damn it",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Good way to go out.", 
    leftChoice: function(){location.reload();
    },
    name: "customer",
    resultText: "",
    image: "./images/customer.svg"
  }  
},
]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "oops", 
  leftChoice: function(){location.reload();
  },
  name: "chef",
  resultText: "You made a mistake",
  image: "./images/customer.svg"
}