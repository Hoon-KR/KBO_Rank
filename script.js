document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://prof-jwchi.github.io/kopo-front2026/Json/baseball.json';
    const tbody = document.getElementById('ranking-body');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // 데이터를 화면에 그리는 함수 호출
            const teamList = data.list;
            renderTable(teamList);
        })
        .catch(error => {
            console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
        });

    function renderTable(teams) {
        tbody.innerHTML = ''; // 기존 내용 초기화

        teams.forEach(team => {
            const tr = document.createElement('tr');
            
            // 이미지의 데이터 구조에 맞춰 행 생성
            tr.innerHTML = `
                <td>${team.rank.rank}</td>
                <td>
                    <img src="${team.imageUrl}" alt="${team.shortName}" style="width:34px; vertical-align:middle;">
                    ${team.shortName} >    
                </td>
                <td>${team.rank.game}</td>
                <td>${team.rank.win}</td>
                <td>${team.rank.draw}</td>
                <td>${team.rank.loss}</td>
                <td>${team.rank.wpct}</td>
                <td>${team.rank.gb}</td>
                <td>${team.rank.streak}</td>
            `;
            
            tbody.appendChild(tr);
        });
    }
});