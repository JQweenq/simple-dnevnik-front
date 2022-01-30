<template>
	<section>
		<main>
			<div class="timetable">
				<table>
					<tbody>
						<tr>
							<th colspan="5">Рассписание</th>
						</tr>
						<tr>
							<td>№</td>
							<td>Вчера<br />
								(Понедельник)
							</td>
							<td>Сегодня<br />
								(Вторник)
							</td>
							<td>Завтра<br />
								Среда
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Литература</td>
							<td>Обществознание</td>
							<td>Информатика</td>
						</tr>
						<tr>
							<td>2</td>
							<td>История</td>
							<td>Биология</td>
							<td>Информатика</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Астрономия</td>
							<td>Физика</td>
							<td>ОБЖ</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	</section>
</template>
<script lang="ts">
export default{
	data: () => ({

	}),
	methods:{
		
	}
}
</script>


<style>
main{
	padding-top: 50px;
}
table {
	margin: 0 auto;
	width: 300px;
	font-family: 'Roboto', sans-serif;
	text-align: center;
	border-collapse: collapse;
	border-spacing: 5px;
	background: #E1E3E0;
	border-radius: 20px;
}
th {
	font-size: 18px;
	font-weight: 300;
	padding: 12px 10px;
	border-bottom: 2px solid #F56433;
	color: #F56433;
}
tbody tr:nth-child(2) {
	border-bottom: 2px solid #F56433;
}
td {
padding: 10px;
	color: #8D8173;
}
</style>