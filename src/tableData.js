import chevronDownIcon from "@/assets/icons/chevron-down.svg";

const tableData = [
  {
    id: 1,
    no: 1,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 2,
    no: 2,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 3,
    no: 3,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 4,
    no: 4,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 5,
    no: 5,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 6,
    no: 6,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 7,
    no: 7,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 8,
    no: 8,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 9,
    no: 9,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },
  {
    id: 10,
    no: 10,
    claim: 199704630,
    invoice: 501305052598,
    provider: 'Mervyn’s',
    tax: 339741464,
    bill: 79104600,
    line: 25372860,
    disability: 'Medical',
    service: '04-11-2018',
    lineCharge: '$25.00',
    unitCharge: '$268.80',
    details: 'i'
  },

];

export const createSubtable = () => {
  const subtable = document.createElement('tr');
  subtable.setAttribute('class', 'subtable__table');

  subtable.innerHTML = `
    <td class="subtable__spacing"></td>
    <td colspan="8" class="subtable__table">
      <div class="subtable__container">
        <table class="subtable__content">
          <tbody>
            <tr class="subtable__headings">
              <td class="subtable__headings_no"># <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_claim">Claim Number <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_invoice">Invoice No <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_provider">Billing Provider.. <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_tax">Tax Id <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_bill">Bill Id <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_line">Line Id <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_disability">Disability Res.. <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_service">Service Date <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_lineCharge">Line Charge <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_unitCharge">Per Unit Charge <img src=${chevronDownIcon} alt=""></td>
              <td class="subtable__headings_details">Details <img src=${chevronDownIcon} alt=""></td>
            </tr>
            ${
            tableData.map((data) => `
              <tr class="subtable__details ${data.id % 2 === 0 ? 'even' : 'odd'}">
                <td class="subtable__details_no">${data.no}</td>
                <td class="subtable__details_claim">${data.claim}</td>
                <td class="subtable__details_invoice">${data.invoice}</td>
                <td class="subtable__details_provider">${data.provider}</td>
                <td class="subtable__details_tax">${data.tax}</td>
                <td class="subtable__details_bill">${data.bill}</td>
                <td class="subtable__details_line">${data.line}</td>
                <td class="subtable__details_disability">${data.disability}</td>
                <td class="subtable__details_service">${data.service}</td>
                <td class="subtable__details_lineCharge">${data.lineCharge}</td>
                <td class="subtable__details_unitCharge">${data.unitCharge}</td>
                <td class="subtable__details_details"><span role="button" data-toggle="modal" data-target="#tableModal">i</span></td>
               </tr>
              `).join('')
            }
          </tbody>
        </table>
        
        <ul class="subtable__pagination">
          <li class="subtable__pagination_item"><span>Prev</span></li>
          <li class="subtable__pagination_item"><a class="active" href="">1</a></li>
          <li class="subtable__pagination_item"><a href="">2</a></li>
          <li class="subtable__pagination_item"><a href="">3</a></li>
          <li class="subtable__pagination_item"><span>...</span></li>
          <li class="subtable__pagination_item"><a href="">11</a></li>
          <li class="subtable__pagination_item"><a href="">12</a></li>
          <li class="subtable__pagination_item"><span>Next</span></li>
        </ul>
      </div>
    </td>
  `;
  return subtable;
};