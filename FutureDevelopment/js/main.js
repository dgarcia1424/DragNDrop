* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #FFCE00;
	font-family: 'Roboto', Helvetica, sans-serif;
}

.app {
	display: flex;
	flex-flow: column;

	width: 100vw;
	height: 100vh;
}

header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
}

.lists {
	display: flex;
	flex: 1;
	width: 100%;
	overflow-x: scroll;
}

.lists .list {
	display: flex;
	flex-flow: column;
	flex: 1;

	width: 100%;
	min-width: 250px;
	max-width: 350px;
	height: 100%;
	min-height: 150px;

	background-color: rgba(0, 0, 0, 0.1);
	margin: 0 15px;
	padding: 8px;
	transition: all 0.2s linear;
}

.lists .list .list-item {
	background-color: #F3F3F3;
	border-radius: 8px;
	padding: 15px 20px;
	text-align: center;
	margin: 4px 0px;
}
