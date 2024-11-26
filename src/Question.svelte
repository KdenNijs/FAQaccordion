<script>
    export let question = "Specify question";
    let textVisible = false;

    const showAnswer = () => {
        textVisible = !textVisible;
    }
</script>

<div>
    <div on:click={showAnswer}>
        <h4>{question}</h4>
    </div>
    {#if textVisible}
        <slot></slot>
    {/if}
</div>

<style>

</style>