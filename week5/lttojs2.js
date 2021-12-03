
        // function randomFunc(min,max){
        //     let result = Math.floor(Math.random()*(max - min) + min);
        //     return result;
        // }
        function randomFunc(min,max){
            return Math.floor(Math.random()*(max - min) + min);
        }


        // let lottoArr = [];
        let lottoSet = new Set();
        function lottoGenerator() {
            while (lottoArr.length < 6){
                let result = randomFunc(1, 46);
                // let isGot = false;
                lottoSet.add(result);
                //중복판단
                // lotto.forEach(element => {
                //     if(element === result){
                //         isGot = true;
                //     } 
                // });
                // //중복이 없다면 배열에 추가
                // if (!isGot) {
                //     lottoArr.push(result);
                // }

                // --------include를 이용한 방법 ie지원불가--------
                // if (!lottoArr.includes(result)) {
                //     lottoArr.push(result);
                // }
                //-----------------------------------------------
            }
            return lottoSet
        }

        Console.log(lottoGenerator());
