<script>
	import Question from './Question.svelte';
</script>

<main>
	<div class='FAQblock'>
		<div class='FAQtitle'>
			<img class='star' src="images/icon-star.svg" alt=""> 
			<h1>FAQs</h1>
		</div>
		<Question question="What is Frontend Mentor, and how will it help me?">
			<p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
		</Question>
		<Question question="Is Frontend Mentor free?">
			<p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
		</Question>
		<Question question="Can I use Frontend Mentor projects in my portfolio?">
			<p>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
		</Question>
		<Question question="How can I get help if I'm stuck on a challenge?">
			<p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
		</Question>
	</div>
</main>

<style>
	h1 {
		font-size: 3em;
		font-weight: bold;
	}

	.FAQblock {
		padding: 2px 25px;
		max-width: 500px;
		border-radius: 15px;
		margin: 20vh auto;
		background-color: hsl(0, 0%, 100%);
	}

	.FAQtitle {
		display: flex;
	}

	.FAQtitle * {
		padding: 0 5px;
	}
</style>