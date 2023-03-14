library(plyr)
library(MASS)
library(numbers)

Catergories=unique(FastPass[,4])

FastPassQuest <- function(CatPick,Grade){
#############################
if (Grade==3){
if (CatPick==1){
  Size=dim(FPGr3Geometry)
  randquest=sample(1:Size[1])[1]
  print(FPGr3Geometry[randquest,5])
  if (randquest==1){
    ANS=c("Trapezium (Trapazoid)","Parallelogram","Rectangle" ,"Rhombus","Square","Kite")
    print(ANS)
  }
  if (randquest==2){
    ANS=c("Trapezium (Trapazoid)","Parallelogram","Rectangle" ,"Rhombus","Square","Kite")
    print(ANS)
  }
  if (randquest==3){
    ANS=c("Triangle")
    print(ANS)
  }
  if (randquest==4){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==5){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==6){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==7){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==8){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==9){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==10){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==11){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==12){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==13){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==14){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==15){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==16){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==17){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==18){
    ANS=FPGr3Geometry[randquest,6]
    print(ANS)
  }
} 
if (CatPick==2){
  print("error")}
if (CatPick==3){
Size=dim(FRGr3FDP)
randquest=sample(1:Size[1])[1]
  print(FRGr3FDP[randquest,5])
 if (randquest==1){
   X=sample(1:100)[1]
  print(X)
  ANS=X
  print(ANS)
}
if (randquest==2){
  X=seq(from=2,to=100,by=2)
  X=sample(X)[1]
print(X)
ANS=X/2
print(ANS)
}
if (randquest==3){
    X=seq(from=4,to=100,by=4)
    X=sample(X)[1]
    print(X)
    ANS=X/4
    print(ANS)
}
  if (randquest==4){
    X=seq(from=4,to=100,by=4)
    X=sample(X)[1]
    print(X)
    ANS=X*3/4
    print(ANS)
  }
  if (randquest==5){
    X=1:100
    X=sample(X)[1]
    print(X)
    ANS=X
    print(ANS)
  }
  if (randquest==6){
    X=seq(from=2,to=100,by=2)
    X=sample(X)[1]
    A=X/2
    B=sample(1:(X/2))[1]
    print(X)
    print(A)
    print(B)
    ANS=A+B
    print(c(ANS,"/",X))
  }
}
if (CatPick==4){
  Size=dim(FPGr3Round)
  randquest=sample(1:Size[1])[1]
  print(FPGr3Round[randquest,5])
  if (randquest==1){
    X=sample(1:1000)[1]
    print(X)
    ANS=round_any(X,10)
    print(ANS)
  }
  if (randquest==2){
    X=sample(1:10000)[1]
    ANS=round_any(X,100)
    print(X)
    print(ANS)
  }
  if (randquest==3){
    X=sample(1:9999)[1]
    ANS=round_any(X,1000)
    print(X)
    print(ANS)
  }
}
if (CatPick==5){
  Size=dim(FPGr3Mult)
  randquest=sample(1:Size[1])[1]
  print(FPGr3Mult[randquest,5])
  if (randquest==1){
    X=sample(1:10)[1]
    print(X)
    ANS=0
    print(ANS)
  }
  if (randquest==2){
    X=sample(1:10)[1]
    print(X)
    ANS=X
    print(ANS)
  } 
  if (randquest==3){
    X=sample(1:10)[1]
    print(X)
    ANS=x*2
    print(ANS)
  }
  if (randquest==4){
    X=sample(1:10)[1]
    print(X)
    ANS=x*5
    print(ANS)
  }
  if (randquest==5){
    X=sample(1:10)[1]
    print(X)
    ANS=0
    print(ANS)
  }
}
if (CatPick==6){
    Size=dim(FPGr3Money)
    randquest=sample(1:Size[1])[1]
    print(FPGr3Money[randquest,5])
    if (randquest==1){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==2){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==3){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==4){
      X=sample(1:50)[1]
      ANS=X*2
      print(ANS)
    }
    if (randquest==5){
      X=sample(1:10)[1]
      ANS=X*5
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==7){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==8){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==9){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==10){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==11){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==12){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==13){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    if (randquest==14){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }
    }
if (CatPick==7){
    Size=dim(FPGr3Time)
    randquest=sample(1:Size[1])[1]
    print(FPGr3Time[randquest,5])
    if (randquest==1){
      ANS=FPGr3Money[randquest,6]
      print(ANS)
    }

}
}
 
#############################
if (Grade==4){
  
  if (CatPick==1){
    Size=dim(FRGr4Geometry)
    randquest=sample(1:Size[1])[1]
    print(FRGr4Geometry[randquest,5])
    
    if (randquest==1){
      Unit=sample(c("Inches","Feet","Meters","Centemeters","Millimeters","Yards"))[1]
      X=sample(1:10)[1]
      Y=sample(1:10)[1]
      print(X)
      print(Y)
      ANS=2*X+2*Y 
      print(ANS)
    }
    if (randquest==2){
      Unit=sample(c("Inches","Feet","Meters","Centemeters","Millimeters","Yards"))[1]
      X=sample(1:10)[1]
      ANS=X*4 
      print(X)
      print(ANS)
    } 
    if (randquest==3){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==4){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==5){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==6){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==7){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==8){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==9){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
    if (randquest==10){
      ANS=FRGr4Geometry[randquest,6]
      print(ANS)
    }
  }
  if (CatPick==2){
    print("error")}
  if (CatPick==3){
    Size=dim(FRGr4FDP)
    randquest=sample(1:Size[1])[1]
    print(FRGr4FDP[randquest,5])
    
    if (randquest==1){
      X=sample(1:20)[1]
      ANS=X*2 
      print(X)
      print(ANS)
    }
    if (randquest==2){
      X=sample(1:20)[1]
      ANS=X*3 
      print(X)
      print(ANS)
    }
    if (randquest==3){
      X=sample(1:20)[1]
      ANS=X*4 
      print(X)
      print(ANS)
    }
    if (randquest==4){
      X=sample(1:20)[1]
      ANS=X*4 
      print(X)
      print(ANS)
    }
    if (randquest==5){
      X=sample(1:20)[1]
      ANS=X*6 
      print(X)
      print(ANS)
    }
    if (randquest==6){
      X=sample(1:20)[1]
      ANS=X*7 
      print(X)
      print(ANS)
    }
    if (randquest==7){
      X=sample(1:20)[1]
      ANS=X*8
      print(X)
      print(ANS)
    }
    if (randquest==8){
      X=sample(1:20)[1]
      ANS=X*9 
      print(X)
      print(ANS)
    }
    if (randquest==9){
      X=sample(1:20)[1]
      ANS=X*10 
      print(X)
      print(ANS)
    }
    if (randquest==10){
      X=sample(1:10)[1]
      Y=sample(1:10)[1]
      Y=X+Y
      ANS= fractions(X/Y)
      print(X)
      print(Y)
      print(ANS)
    }
    if (randquest==11){
      X=sample(1:10)[1]
      Y=sample(1:10)[1]
      Y=X+Y
      ANS= fractions(X/Y)
      print(X)
      print(Y)
      print(ANS)
    }
    if (randquest==12){
      X=sample(1:10)[1]
      Y=sample(1:10)[1]
      Y=X+Y
      ANS= fractions(X/Y)
      print(X)
      print(Y)
      print(ANS)
    }
    if (randquest==13){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==14){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==15){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==16){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==17){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==18){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==19){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==20){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==21){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==22){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==23){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==24){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==25){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==26){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
    if (randquest==27){
      ANS= FRGr4FDP[randquest,6]
      print(ANS)
    }
  }
  if (CatPick==4){
    Size=dim(FRGr4Round)
    randquest=sample(1:Size[1])[1]
    print(FRGr4Round[randquest,5])
    if (randquest==1){
      X=sample(1:999999)[1]
      print(X)
      ANS=round_any(X,10000)
      print(ANS)
    }
    if (randquest==2){
      X=sample(1:99999999)[1]
      print(X)
      ANS=round_any(X,100000)
      print(ANS)
    }
    if (randquest==3){
      X=sample(1:99999)[1]
      print(X)
      ANS=round_any(X,1000)
      print(prettyNum(ANS))
    }
  if (CatPick==5){
    Size=dim(FRGr4Mult)
    randquest=sample(1:Size[1])[1]
    print(FRGr4Mult[randquest,5])
    
    if (randquest==1){
      X=sample(1:10)[1]
      print(X)
      ANS=X*3
      print(ANS)
    }
    if (randquest==2){
      X=sample(1:10)[1]
      print(X)
      ANS=X*4
      print(ANS)
    }
    if (randquest==3){
      X=sample(1:10)[1]
      print(X)
      ANS=X*6
      print(ANS)
    }
    if (randquest==4){
      X=sample(1:10)[1]
      print(X)
      ANS=X*7
      print(ANS)
    }
    if (randquest==5){
      X=sample(1:10)[1]
      print(X)
      ANS=X*8
      print(ANS)
    }
    if (randquest==6){
      X=sample(1:10)[1]
      print(X)
      ANS=X*9
      print(ANS)
    }
  }
  if (CatPick==6){
    Size=dim(FRGr4Money)
    randquest=sample(1:Size[1])[1]
    print(FRGr4Money[randquest,5])
    
    if (randquest==1){
      poss=seq(2,20,2)
      X=sample(poss)[1]
      print(X)
      ANS=X*2.5
      print(ANS)
    }
    if (randquest==2){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==3){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==4){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==5){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==6){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==7){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==8){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==9){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==10){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
    if (randquest==11){
      ANS=FRGr4Money[randquest,6]
      print(ANS)
    }
  }
  if (CatPick==7){
  Size=dim(FPGr4Time)
  randquest=sample(1:Size[1])[1]
  print(FPGr4Time[randquest,5])
  if (randquest==1){
    ANS=FPGr3Money[randquest,6]
    print(ANS)
  }
}
}
  if (CatPick==5){
    Size=dim(FRGr4Mult)
    randquest=sample(1:Size[1])[1]
    print(FRGr4Mult[randquest,5])
    
    if (randquest==1){
      X=sample(1:10)[1]
      print(X)
      ANS=X*3
      print(ANS)
    }
    if (randquest==2){
      X=sample(1:10)[1]
      print(X)
      ANS=X*4
      print(ANS)
    }
    
    if (randquest==3){
      X=sample(1:10)[1]
      print(X)
      ANS=X*6
      print(ANS)
    }
    if (randquest==4){
      X=sample(1:10)[1]
      print(X)
      ANS=X*7
      print(ANS)
    }
    if (randquest==5){
      X=sample(1:10)[1]
      print(X)
      ANS=X*4
      print(ANS)
    }
    if (randquest==6){
      X=sample(1:10)[1]
      print(X)
      ANS=X*9
      print(ANS)
    }
  }
  if (CatPick==6){
    Size=dim(FRGr4Money)
    randquest=sample(1:Size[1])[1]
    print(FRGr4Money[randquest,5])
    
    if (randquest==1){
      samp=sequence(16,2,2)
      X=sample(samp)[1]
      print(X)
      ANS=X*.25/.10
      print(ANS)
    }
    if (randquest==2){
      ANS=print(FRGr4Money[randquest,6])
      print(ANS)
    }
    if (randquest==3){
      ANS=print(FRGr4Money[randquest,6])
      print(ANS)
    }
    if (randquest==4){
      ANS=print(FRGr4Money[randquest,6])
      print(ANS)
    }
    if (randquest==5){
      ANS=print(FRGr4Money[randquest,6])
      print(ANS)
    }
    if (randquest==6){
      ANS=print(FRGr4Money[randquest,6])
      print(ANS)
    if (randquest==7){
        ANS=print(FRGr4Money[randquest,6])
        print(ANS)
    }
   if (randquest==8){
        ANS=print(FRGr4Money[randquest,6])
        print(ANS)
   }
  if (randquest==9){
        ANS=print(FRGr4Money[randquest,6])
        print(ANS)
  }
   if (randquest==10){
        ANS=print(FRGr4Money[randquest,6])
        print(ANS)
   }
   if (randquest==11){
        ANS=print(FRGr4Money[randquest,6])
        print(ANS)
      }
    }
  }
  if (CatPick==7){
    Size=dim(FPGr5Time)
    randquest=sample(1:Size[1])[1]
    print(FPGr5Time[randquest,5])
    if (randquest==1){
      ANS=FPGr4Time[randquest,6]
      print(ANS)
    }
  }
}
  
#############################
if (Grade==5){

if (CatPick==1){
  Size=dim(FRGr5Geometry)
  randquest=sample(1:Size[1])[1]
  print(FRGr5Geometry[randquest,5])
  
  if (randquest==1){
    Unit=sample(c("Inches","Feet","Meters","Centemeters","Millimeters","Yards"))[1]
    X=sample(1:10)[1]
    Y=sample(1:10)[1]
    print(X)
    print(Y)
    ANS=X*Y 
    print(ANS)
    
  }
  if (randquest==2){
    Unit=sample(c("Inches","Feet","Meters","Centemeters","Millimeters","Yards"))[1]
    X=sample(1:10)[1]
    print(X)
    ANS=X*X 
    print(ANS)
    
  }
  if (randquest==3){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==4){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==5){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==6){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==7){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==8){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==9){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==10){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==11){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==12){
    ANS=FRGr5Geometry[randquest,6]
    print(ANS)
  }
  if (randquest==13){
    ANS=FRGr5Geometry[randquest,6]
    
  }
  }
if (CatPick==2){
  print("error")}
if (CatPick==3){
  Size=dim(FRGr5FDP)
  randquest=sample(1:Size[1])[1]
  print(FRGr5FDP[randquest,5])
 
   if (randquest==1){
    X=sample(1:10)[1]
    Y=sample(1:10)[1]
    mult=1:10
    Y=X+Y
    ANS= fractions(X/Y)
    print(X)
    print(Y)
    print(X*mult)
    print(Y*mult)
    print(ANS)
   }
  if (randquest==2){
    X=sample(1:10)[1]
    Y=sample(1:15)[1]
    X=X+Y
    ImpFrac= fractions(X/Y)
    if(X > Y) {
      PX = X - Y
      Z = 1
      
      while(PX > Y) {
        Z = Z + 1
        PX = PX-Y
      }
    }
    W=fractions(PX/Y)
    print(ImpFrac)
    print(Z)
    print(W)
  }
  
  if (randquest==3){
    X=seq(from=2,to=30,by=2)
    X=sample(X)[1]
    ANS= X*1.5
    print(X)
    print(ANS)
  }
  if (randquest==4){
    X=seq(from=2,to=30,by=2)
    X=sample(X)[1]
    ANS= X*2.5
    print(X)
    print(ANS)
  }
  if (randquest==5){
    X=seq(from=2,to=30,by=2)
    X=sample(X)[1]
    ANS= X*3.5
    print(X)
    print(ANS)
  }
  if (randquest==6){
    X=seq(from=2,to=30,by=2)
    X=sample(X)[1]
    ANS= X*1.5
    print(X)
    print(ANS)
  }
  if (randquest==7){
    X=seq(from=2,to=30,by=2)
    X=sample(X)[1]
    ANS= X*2.5
    print(X)
    print(ANS)
  }
  if (randquest==8){
    X=seq(from=2,to=30,by=2)
    X=sample(X)[1]
    ANS= X*3.5
    print(X)
    print(ANS)
  }
}
if (CatPick==4){
  Size=dim(FRGr5Round)
  randquest=sample(1:Size[1])[1]
  print(FRGr5Round[randquest,5])
  
  if (randquest==1){
    X=sample(1:100)[1]
    X=X/10
    print(X)
    ANS=round_any(X,1)
    print(ANS)
  }
  if (randquest==2){
    X=sample(1:1000)[1]
    Xmod=X/100
    print(format(Xmod,nsmall=2))
    ANS=round_any(X,10)
    ANS=ANS/100
    print(ANS)
  } 
  if (randquest==3){
    X=sample(1:10000)[1]
    Xmod=X/1000
    print(format(Xmod,nsmall=2))
    ANS=round_any(X,10)
    ANS=ANS/1000
    print(ANS)
  }
}
if (CatPick==5){
  Size=dim(FRGr5Mult)
  randquest=sample(1:Size[1])[1]
  print(FRGr5Mult[randquest,5])
  
  if (randquest==1){
    X=sample(1:12)[1]
    print(X)
    ANS=X*11
    print(ANS)
  }
  if (randquest==2){
    X=sample(1:12)[1]
    print(X)
    ANS=X*12
    print(ANS)
  }
  
  if (randquest==3){
    X=sample(2:30)[1]
    Y=sample(2:16)[1]
    print(X)
    print(Y)
    ANS=GCD(X,Y)
    print(ANS)
  }
  if (randquest==4){
    X=sample(2:12)[1]
    Y=sample(2:12)[1]
    print(X)
    print(Y)
    ANS=LCM(X,Y)
      print(ANS)
  }
}
if (CatPick==6){
  Size=dim(FRGr5Money)
  randquest=sample(1:Size[1])[1]
  print(FRGr5Money[randquest,5])
  
  if (randquest==1){
    X=sample(1:1000)[1]
    X=X/100 
    print(format(X,nsmall=2))
    ANS=20-X
    print(ANS)
  }
  if (randquest==2){
    X=sample(1:1000)[1]
    X=X/100 
    print(format(X,nsmall=2))
    ANS=10-X
    print(ANS)
  }
  if (randquest==3){
    X=sample(1:10)[1]
    print(format(X,nsmall=2))
    ANS=20*X
    print(ANS)
  }
  if (randquest==4){
    X=sample(1:10)[1]
    print(format(X,nsmall=2))
    ANS=10*X
    print(ANS)
  }
  if (randquest==5){
    X=sample(1:20)[1]
    print(format(X,nsmall=2))
    ANS=4*X
    print(ANS)
  }
}
if (CatPick==7){
  Size=dim(FPGr5Time)
  randquest=sample(1:Size[1])[1]
  print(FPGr5Time[randquest,5])
  if (randquest==1){
    ANS=FPGr3Money[randquest,6]
    print(ANS)
  }
}
}
}


