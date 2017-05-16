      const secondHand = document.querySelector('.second-hand');
      const minuteHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      function setDate(){
          const now = new Date();
          const seconds = now.getSeconds();
          const minutes = now.getMinutes();
          const hours = now.getHours();
          //turn the seconds to degrees. First make seconds base 100 (instead of base 60)
          // 0 = 0deg, 100 = 360deg
          const secondsDegrees = ((seconds/60)*360) + 90//offset the original transform so that second hand moves in sync with seconds;
          secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
          
          const minutesDegrees = ((minutes/60)*360) +90;
          minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
          
          //divide by 12 for hours because there are 12 hours in a full rotation
          const hoursDegrees = ((hours/12)*360) + 90;
          hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      }
      
      setInterval(setDate,1000);
