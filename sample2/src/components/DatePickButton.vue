<template>
    <!-- 버튼 초기값 ( top: 112.104px, left: 574.667px) -->
    <div class="pickbutton" :style="{height: updatestartlocation(starthourvalue, startminvalue, endhourvalue, endminvalue)[1], 
        top: updatestartlocation(starthourvalue, startminvalue, endhourvalue, endminvalue)[0], 
        left: updatedaylocation(startdayindex)}">
        <button @click="testfunction" :style="{backgroundColor: updateschedulecolor(scheduleindex)}">

        </button>
    </div>
</template>

<script>
export default {
    name: "DatePickButton",
    data(){
        return{
            leftpixel: '0px',
            toppixel: '0px',
            heightpixel: '0px',
            indexcolor: ['#cc1d4b', '#d18915', '#69cc1d', '#1dcc54', '#1dccaf', '#1dafcc', '#1d57cc', '#2e1dcc', '#741dcc', '#cc1db8'],
        }
    },
    props: {
        startdayindex: Number,
        starthourvalue: Number,
        endhourvalue: Number,
        startminvalue: Number,
        endminvalue: Number,
        scheduleindex: Number,
    },
    methods: {
        // 요일에 따른 위치 구하기
        updatedaylocation(dayindex) {
            // console.log(dayindex);
            switch (dayindex) {
                case 1:
                    this.leftpixel = '574.667px';
                    break;
                case 2:
                    this.leftpixel = '622.667px';
                    break;
                case 3:
                    this.leftpixel = '670.667px';
                    break;
                case 4:
                    this.leftpixel = '718.667px';
                    break;
                case 5:
                    this.leftpixel = '766.667px';
                    break;
            }
            return this.leftpixel;
        },
        // 시간에 따른 위치 구하기
        updatestartlocation(starthour, startmin, endhourvalue, endminvalue) {
            if(starthour < 16){
                    this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
                    this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            }else{
                    this.toppixel = 112.104 + (48 * (starthour%8+8)) + (0.7 * startmin) + 'px';
                    this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            }

            // switch (starthour) {
            //     case 8:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 9:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 10:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 11:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 12:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 13:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 14:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 15:
            //         this.toppixel = 112.104 + (48 * (starthour%8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 16:
            //         this.toppixel = 112.104 + (48 * (starthour%8+8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 17:
            //         this.toppixel = 112.104 + (48 * (starthour%8+8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 18:
            //         this.toppixel = 112.104 + (48 * (starthour%8+8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 19:
            //         this.toppixel = 112.104 + (48 * (starthour%8+8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            //     case 20:
            //         this.toppixel = 112.104 + (48 * (starthour%8+8)) + (0.7 * startmin) + 'px';
            //         this.heightpixel = (48 * (endhourvalue - starthour)) + (0.7 * (endminvalue-startmin)) + 'px';
            //         break;
            // }
            // console.log(this.toppixel + " / " + this.heightpixel)
            return [this.toppixel, this.heightpixel];

        },
        // 순서에 따른 색 설정
        updateschedulecolor(scheduleindex) {
            return this.indexcolor[scheduleindex];
        },
        testfunction(){
            console.log("test");
        }
    },
    mounted() {
        
    }
}
</script>

<style>
.pickbutton{
    width: 48px;
    z-index: 1;
    display: grid;
    position: absolute;
}
</style>