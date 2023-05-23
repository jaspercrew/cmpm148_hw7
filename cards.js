
firstCard = {
  prompt: "Hey man, you like being the restaurant owner?",
  rightChoiceText: "It's ok",
  rightChoice: function(){
    //addResource("veggies", 20)
    addPackToDeck("main")
    //addToTopDeck("VanGoghHappy")
    },
  
  leftChoiceText: "It sucks", 
  leftChoice: function(){
    //addResource("meat", 20)
    addPackToDeck("main")
    //addToTopDeck("VanGoghBetrayed")
    //enemiesMade += 1;
  },
  name: "chef",
  resultText: "",
  image: "./images/chef.svg",
  priority: 1,
  pack : "main"
}


cardPool = {
  "uniqueIDList" : [],
  
  // "VanGoghHappy" : {
  //   prompt: "Really? Let's be friends",
  //   rightChoiceText: "Lol Okay",
  //     rightChoice: function(){
  //     addResource("veggies", 10)
  //     },
  //   leftChoiceText: "XD HAHA. . .No", 
  //   leftChoice: function(){
  //     addResource("meat", 20)
  //     addToTopDeck("VanGoghBetrayed")
  //   enemiesMade += 1;
  //   },
  //   name: "Van Gogh",
  //   resultText: "",
  //   image: "./images/VanGosh.png",
  //   priority: 2,
  //   pack : "none"
  // },


  // "VanGoghBetrayed": {
  //   prompt: "To Heck with you",
  //   rightChoiceText: ". . . ",
  //     rightChoice: function(){
  //     addResource("veggies", 20)
  //     },
  //   leftChoiceText: "Fine. . . ", 
  //   leftChoice: function(){
  //     addResource("meat", 100)
  //   },
  //   name: "Van Gogh",
  //   resultText: "",
  //   image: "./images/VanGosh.png",
  //   priority: 2,
  //   pack : "none"
  // }

}




