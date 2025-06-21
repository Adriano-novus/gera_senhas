const { jsPDF } = window.jspdf;
let contadorNormal = 1;
let contadorPrioritaria = 1;
let ultimasSenhas = [];

function gerarSenha(tipo) {
  const prefixo = tipo === 'P' ? 'P' : 'N';
  const numero = tipo === 'P' ? contadorPrioritaria++ : contadorNormal++;
  const senha = `${prefixo}${String(numero).padStart(3, '0')}`;
  document.getElementById('senha').textContent = `Última senha: ${senha}`;

  ultimasSenhas.unshift(senha);
  if (ultimasSenhas.length > 3) ultimasSenhas.pop();

  const lista = document.getElementById('listaSenhas');
  lista.innerHTML = '';
  ultimasSenhas.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    lista.appendChild(li);
  });

  const doc = new jsPDF({ unit: 'mm', format: [80, 70] });
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('ATENDIMENTO', 35, 15, { align: 'center' });
  doc.setFontSize(24);
  doc.text(`Senha ${senha}`, 35, 35, { align: 'center' });
  doc.setFontSize(12);
  doc.text(`Emitido: ${new Date().toLocaleString('pt-BR')}`, 35, 60, { align: 'center' });
  doc.autoPrint();
  window.open(doc.output('bloburl'), '_blank');
}