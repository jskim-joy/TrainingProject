<template>
    <div class="mycalendar">
        <!-- 현재 년 / 월 표시 -->
        <h1>{{currentYear}}년 {{currentMonth}}월</h1>
        <!-- 시간 표시 -->
        <div :style="{ display: 'inline-table'}">
            <table class="timetable">
                <tr>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>8</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>9</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>10</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>11</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>12</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>13</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>14</span>
                    </td>
                </tr>                
                <tr>
                    <td>
                        <span>15</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>16</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>17</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>18</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>19</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>20</span>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 날짜 / 요일 표시 -->
        <div :style="{ display: 'inline-table'}">
            <!-- 일정 선택 버튼 추가 -->
            <DatePickButton :startdayindex="1" :starthourvalue="10" :startminvalue="0" :endhourvalue="11" :endminvalue="30" :scheduleindex="0" />
            <DatePickButton :startdayindex="1" :starthourvalue="14" :startminvalue="20" :endhourvalue="16" :endminvalue="0" :scheduleindex="1" />
            <DatePickButton :startdayindex="2" :starthourvalue="9" :startminvalue="0" :endhourvalue="10" :endminvalue="30" :scheduleindex="2" />
            <DatePickButton :startdayindex="2" :starthourvalue="15" :startminvalue="0" :endhourvalue="17" :endminvalue="0" :scheduleindex="3" />
            <DatePickButton :startdayindex="3" :starthourvalue="11" :startminvalue="30" :endhourvalue="12" :endminvalue="30" :scheduleindex="4" />
            <DatePickButton :startdayindex="3" :starthourvalue="13" :startminvalue="30" :endhourvalue="14" :endminvalue="30" :scheduleindex="5" />
            <DatePickButton :startdayindex="4" :starthourvalue="12" :startminvalue="0" :endhourvalue="13" :endminvalue="30" :scheduleindex="6" />
            <DatePickButton :startdayindex="4" :starthourvalue="14" :startminvalue="30" :endhourvalue="16" :endminvalue="0" :scheduleindex="7" />
            <DatePickButton :startdayindex="5" :starthourvalue="9" :startminvalue="30" :endhourvalue="11" :endminvalue="30" :scheduleindex="8" />
            <DatePickButton :startdayindex="5" :starthourvalue="14" :startminvalue="0" :endhourvalue="16" :endminvalue="30" :scheduleindex="9" />
            <table class="daytable">
                <tr>
                    <td>
                        <strong :style="{color: gettodayhighlight(1)}">{{getmondayvalue()}}</strong> 월
                    </td> 
                    <td>
                        <strong :style="{color: gettodayhighlight(2)}">{{gettuesdayvalue()}}</strong> 화
                    </td> 
                    <td>
                        <strong :style="{color: gettodayhighlight(3)}">{{getwednesdayvalue()}}</strong> 수
                    </td> 
                    <td>
                        <strong :style="{color: gettodayhighlight(4)}">{{getthursdayvalue()}}</strong> 목
                    </td> 
                    <td>
                        <strong :style="{color: gettodayhighlight(5)}">{{getfridayvalue()}}</strong> 금
                    </td>   
                </tr>
            </table>
            <!-- 일정 버튼 표시부분 -->
            <table class="timelinetable">
                <tr>
                    <div v-for="columnindex in 13" :key="columnindex.valueOf()">
                        <td v-for="columnindex in 5" :key="columnindex.valueOf()">
                        
                        </td>
                    </div>            
                </tr>
            </table>
        </div>  
    </div>
</template>

<script>
import DatePickButton from './DatePickButton.vue'

export default {
    name: "CalendarBase",
    data() {
        return {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth() + 1,
            currentDay: new Date().getDay(),
            mondayvalue: 0,
            tuesdayvalue: 0,
            wednesdayvalue: 0,
            thursdayvalue: 0,
            fridayvalue: 0,
        };
    },
    methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}`;
            return date;
        },
        // 월요일 값
        getmondayvalue() {
            switch (new Date().getDay()) {
                case 0:
                    this.mondayvalue = new Date().getDate() + 1;
                    break;
                case 1:
                    this.mondayvalue = new Date().getDate();
                    break;
                case 2:
                    this.mondayvalue = new Date().getDate() - 1;
                    break;
                case 3:
                    this.mondayvalue = new Date().getDate() - 2;
                    break;
                case 4:
                    this.mondayvalue = new Date().getDate() - 3;
                    break;
                case 5:
                    this.mondayvalue = new Date().getDate() - 4;
                    break;
                case 6:
                    this.mondayvalue = new Date().getDate() - 5;
                    break;
            }
            return this.mondayvalue;
        },
        // 화요일 값
        gettuesdayvalue() {
            switch (new Date().getDay()) {
                case 0:
                    this.tuesdayvalue = new Date().getDate() + 2;
                    break;
                case 1:
                    this.tuesdayvalue = new Date().getDate() + 1;
                    break;
                case 2:
                    this.tuesdayvalue = new Date().getDate();
                    break;
                case 3:
                    this.tuesdayvalue = new Date().getDate() - 1;
                    break;
                case 4:
                    this.tuesdayvalue = new Date().getDate() - 2;
                    break;
                case 5:
                    this.tuesdayvalue = new Date().getDate() - 3;
                    break;
                case 6:
                    this.tuesdayvalue = new Date().getDate() - 4;
                    break;
            }
            return this.tuesdayvalue;
        },
        // 수요일 값
        getwednesdayvalue() {
            switch (new Date().getDay()) {
                case 0:
                    this.wednesdayvalue = new Date().getDate() + 3;
                    break;
                case 1:
                    this.wednesdayvalue = new Date().getDate() + 2;
                    break;
                case 2:
                    this.wednesdayvalue = new Date().getDate() + 1;
                    break;
                case 3:
                    this.wednesdayvalue = new Date().getDate();
                    break;
                case 4:
                    this.wednesdayvalue = new Date().getDate() - 1;
                    break;
                case 5:
                    this.wednesdayvalue = new Date().getDate() - 2;
                    break;
                case 6:
                    this.wednesdayvalue = new Date().getDate() - 3;
                    break;
            }
            return this.wednesdayvalue;
        },
        // 목요일 값
        getthursdayvalue() {
            switch (new Date().getDay()) {
                case 0:
                    this.thursdayvalue = new Date().getDate() + 4;
                    break;
                case 1:
                    this.thursdayvalue = new Date().getDate() + 3;
                    break;
                case 2:
                    this.thursdayvalue = new Date().getDate() + 2;
                    break;
                case 3:
                    this.thursdayvalue = new Date().getDate() + 1;
                    break;
                case 4:
                    this.thursdayvalue = new Date().getDate();
                    break;
                case 5:
                    this.thursdayvalue = new Date().getDate() - 1;
                    break;
                case 6:
                    this.thursdayvalue = new Date().getDate() - 2;
                    break;
            }
            return this.thursdayvalue;
        },
        // 금요일 값
        getfridayvalue() {
            switch (new Date().getDay()) {
                case 0:
                    this.fridayvalue = new Date().getDate() + 5;
                    break;
                case 1:
                    this.fridayvalue = new Date().getDate() + 4;
                    break;
                case 2:
                    this.fridayvalue = new Date().getDate() + 3;
                    break;
                case 3:
                    this.fridayvalue = new Date().getDate() + 2;
                    break;
                case 4:
                    this.fridayvalue = new Date().getDate() + 1;
                    break;
                case 5:
                    this.fridayvalue = new Date().getDate();
                    break;
                case 6:
                    this.fridayvalue = new Date().getDate() - 1;
                    break;
            }
            return this.fridayvalue;
        },
        // 오늘 날짜 하이라이트
        gettodayhighlight: function (todayindex) {
            if (new Date().getDay() == todayindex) {
                this.highlightstyle = "red";
                // console.log("current color : ", this.highlightstyle);
            }
            else {
                this.highlightstyle = "black";
                // console.log("current color : ", this.highlightstyle);
            }
            return this.highlightstyle;
        },
        debugconsoles() {
            
        }
    },
    mounted() {

    },
    components: { DatePickButton }
}
</script>

<style scope>
td{
    width: 48px;
    height: 48px;
    padding: 0px;
    /* border: 0px solid black; */
}
.mycalendar{
    position: relative;
}
.timetable{
    border-spacing: 0px;
}
.daytable{
    border-spacing: 0px;
}
.timelinetable{
    border-spacing: 0px;
}
</style>