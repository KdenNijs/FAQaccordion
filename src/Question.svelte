<script>
    export let question = "Specify question";
    let textVisible = false;
    let srcPlus = "images/icon-plus.svg"
    let srcMinus = "images/icon-minus.svg"

    $: src = textVisible ? srcMinus : srcPlus;

    const showAnswer = () => {
        textVisible = !textVisible;
    }
</script>

<div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class='questionDiv' on:click={showAnswer}>
        <h4>{question}</h4>
        <img {src} alt='' />
    </div>
    {#if textVisible}
        <slot></slot>
    {/if}
</div>

<style>
    .questionDiv {
        display: flex;
        justify-content: space-between;
    }

    .questionDiv:hover {
        color: purple;
        cursor: pointer;
    }
</style>