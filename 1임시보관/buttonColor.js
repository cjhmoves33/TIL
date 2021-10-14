
const anchor = {
    setColor : function(color) {
        const aList = document.querySelectorAll('a');
        for(i = 0; i < aList.length; i++) {
            aList[i].style.color = color
        }
    }
}

const body = {
    setBackGroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color
    },
    setColor : function(color){
        document.querySelector('body').style.color = color
    }
}

function nightDayChange(self){
    if(self.value === 'night') {
        body.setBackGroundColor("black");
        body.setColor("white");
        self.value = "day";
        anchor.setColor('orange')
    } else {
        body.setBackGroundColor("white");
        body.setColor("black")
        self.value = "night";
        anchor.setColor('green')
    }
}
