/*
<body>
    <div class='filterable red'></div>
    <div class='filterable green'></div>
    <div class='filterable blue'></div>
    <div class='filterable red'></div>
    <div class='filterable green'></div>
    <div class='filterable blue'></div>
    <div class='filterable red'></div>
    <div class='filterable green'></div>
    <div class='filterable blue'></div>
    <div class='filterable red'></div>
    <div class='filterable green'></div>
    <div class='filterable blue'></div>
    <div class='filterable red'></div>
    <div class='filterable green'></div>
    <div class='filterable blue'></div>
    <div class='filterable red'></div>
    <div class='filterable green'></div>
    <div class='filterable blue'></div>

    <button id='all'>Show All</button>
    <button id='red-only'>Reds Only</button>
    <button id='green-only'>Greens Only</button>
    <button id='blue-only'>Blues Only</button>
</body>

<script>
    const $showAll = document.querySelector('#all');
    const $showReds = document.querySelector('#red-only');
    const $showGreens = document.querySelector('#green-only');
    const $showBlues = document.querySelector('#blue-only');
    const $filterable = document.querySelectorAll('.filterable');

    function showAllColors (event) {
        $filterable.forEach(ele => ele.classList.remove('hidden'));
    }

    function showXOnly (colorClass) {
        document.querySelectorAll(`.filterable:not(${colorClass})`).forEach(ele => ele.classList.add('hidden'));
        document.querySelectorAll(`.filterable ${colorClass}`).forEach(ele => ele.classList.remove('hidden'));
    }

    showRedOnly = (event) => {
        const $filterable = document.querySelectorAll('.filterable');
        const $filterableRed = document.querySelectorAll('.filterable .red');
        const $filterableNotRed = document.querySelectorAll('.filterable:not(.red)');

        $filterableNotRed.forEach(ele => ele.classList.add('hidden'));
        $filterable.filter(ele => !ele.classList.includes('red')).forEach(ele => ele.classList.add('hidden'));
        
        document.querySelectorAll('.filterable .red').forEach(ele => ele.classList.remove('hidden'));
        // $('.filterable:not(.red)').hide();
        // $filterable.not('.red').hide();
        // $('.filterable.red').show();
    }

    showGreenOnly = (event) => {
        showXOnly('.green');
    }

    showBlueOnly = (event) => {
        showXOnly('.blue');
    }

    document.addEventListener('DOMContentLoaded', () => {
        $showAll.addEventListener('click', showAllColors);
        $showReds.addEventListener('click', showRedOnly);
        $showGreens.addEventListener('click', showGreenOnly);
        $showBlues.addEventListener('click', showBlueOnly);
    });

</script>

</html>
*/