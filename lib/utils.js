export const dlCsvCheck = async () => {
    try {
      const res = await fetch('/api/partenaire/download/check')
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.setAttribute('download', 'drivers.csv');
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error)
    }
}

export const dlCsvAll = async () => {
    try {
      const res = await fetch('/api/partenaire/download/all')
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.setAttribute('download', 'drivers.csv');
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error)
    }
}

export const dlCsvByDate = async (from, to) => {
    try {
      const res = await fetch(`/api/partenaire/download/interval?from=${from}&to=${to}`)
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.setAttribute('download', 'drivers.csv');
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error)
    }
}