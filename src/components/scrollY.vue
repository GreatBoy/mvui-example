<template>
    <div class="body-wrapper">
        <Hometitle>ScrollY</Hometitle>
        <div class="wrapper-example wrapper-example-scroll">
            <div class="wrapper-area-content" id="parent">
                <Scroll>
                    <ul>
                        <li>Pretty row 1</li>
                        <li>Pretty row 2</li>
                        <li>Pretty row 3</li>
                        <li>Pretty row 4</li>
                        <li>Pretty row 5</li>
                        <li>Pretty row 6</li>
                        <li>Pretty row 7</li>
                        <li>Pretty row 8</li>
                        <li>Pretty row 9</li>
                        <li>Pretty row 10</li>
                        <li>Pretty row 11</li>
                        <li>Pretty row 12</li>
                        <li>Pretty row 13</li>
                        <li>Pretty row 14</li>
                        <li>Pretty row 15</li>
                        <li>Pretty row 16</li>
                        <li>Pretty row 17</li>
                        <li>Pretty row 18</li>
                        <li>Pretty row 19</li>
                        <li>Pretty row 20</li>
                        <li>Pretty row 21</li>
                        <li>Pretty row 22</li>
                        <li>Pretty row 23</li>
                        <li>Pretty row 24</li>
                        <li>Pretty row 25</li>
                        <li>Pretty row 26</li>
                        <li>Pretty row 27</li>
                        <li>Pretty row 28</li>
                        <li>Pretty row 29</li>
                        <li>Pretty row 30</li>
                        <li>Pretty row 31</li>
                        <li>Pretty row 32</li>
                        <li>Pretty row 33</li>
                        <li>Pretty row 34</li>
                        <li>Pretty row 35</li>
                        <li>Pretty row 36</li>
                        <li>Pretty row 37</li>
                        <li>Pretty row 38</li>
                        <li>Pretty row 39</li>
                        <li>Pretty row 40</li>
                        <li>Pretty row 41</li>
                        <li>Pretty row 42</li>
                        <li>Pretty row 43</li>
                        <li>Pretty row 44</li>
                        <li>Pretty row 45</li>
                        <li>Pretty row 46</li>
                        <li>Pretty row 47</li>
                        <li>Pretty row 48</li>
                        <li>Pretty row 49</li>
                        <li>Pretty row 50</li>
                    </ul>
                </Scroll>
            </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Scroll,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Scroll,
        Button
    }
}
</script>
<style>
    .wrapper-example-scroll{
        position: fixed;
        width: 100%;
        height: 100%;
        padding-top: 0.45rem;
        top: 0px;
        left: 0px;
        border-top: solid 1px #ccc;
        box-sizing: border-box;
    }
    .wrapper-example-scroll .wrapper-area-content{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .wrapper-example-scroll .wrapper-area-content li{
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: solid 1px #ccc;
        padding-left: 0.1rem;
        color: #666;
    }
    .wrapper-example-scroll .wrapper-area-content li: last-child {
        border-bottom-width: 0px;
    }
    .wrapper-example-scroll .wrapper-area-content .wrapper-area{
        padding: 0px;
        margin: 0px;
    }
</style>
