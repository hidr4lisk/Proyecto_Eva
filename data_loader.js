async function loadData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}
