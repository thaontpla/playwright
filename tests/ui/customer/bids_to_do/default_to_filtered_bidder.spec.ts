import { expect, test } from "@core/fixtures";
// import PDFParser from 'pdf2json';
import { DefaultToFilteredBidder } from "../../../../page/ui/customer/bids_to_do/default_to_filtered_bidder";
import { Login } from "../../../../page/ui/login";




  test.beforeEach(async ({ page, conf,request }) => {
    const login = new Login(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);
    const dTFBPage = new DefaultToFilteredBidder(page, conf.suiteConf.domain);
    await dTFBPage.gotoDefaultToFilteredBidder();
     
  });
  test.only("@Web filter by bidder Tuuvv and hit print the popup should show Tuuvv in dropdown' @TC_2672_1 ", async ({
    page,
    conf,
  }) => {
    const dTFBPage = new DefaultToFilteredBidder(page, conf.suiteConf.domain);
    await dTFBPage.filterDropdown.selectOption("32a54a63-99c5-457d-b805-4068b1181b08");
    await dTFBPage.printBtn.click();
    await expect(dTFBPage.printDropdown).toHaveValue("32a54a63-99c5-457d-b805-4068b1181b08");
    // const text = await page.$eval<string, HTMLSelectElement>(".MuiOutlinedInput-input", ele => ele.value)
    
});
  test.only("@Web filter by bidder all and hit print the popup should show All bidder checkbox should checked by default' @TC_2672_2 ", async ({
    page,
    conf,
  }) => {
    const dTFBPage = new DefaultToFilteredBidder(page, conf.suiteConf.domain);
    await dTFBPage.printBtn.click();
    await page.waitForTimeout(5000);
    let status = await dTFBPage.allCheckbox.isChecked();
    await expect(status).toBeTruthy();
});
  test("@Web filter by bidder user 1 hit print, close the popup, filter user 2 and hit print the popup should show today's bidder checkbox should checked by default' @TC_2672_3 ", async ({
    page,
    conf,
  }) => {
    const dTFBPage = new DefaultToFilteredBidder(page, conf.suiteConf.domain);
    
});
// test('hit generate and the pdf file should have 1 pages', async () => {

//     let pdfContents: any
//     pdfContents = await getPDFContents('./*.pdf')
//     expect(pdfContents.Pages.length, 'The pdf should have asleat one pages').toBeGreaterThanOrEqual(1);
//   });
// async function getPDFContents(pdfFilePath: string): Promise<any> {
//     let pdfParser = new PDFParser();
//     return new Promise((resolve, reject) => {
//       pdfParser.on('pdfParser_dataError', (errData: {parserError: any}) =>
//         reject(errData.parserError)
//       );
//       pdfParser.on('pdfParser_dataReady', (pdfData) => {
//         resolve(pdfData);
//       });
  
//       pdfParser.loadPDF(pdfFilePath);
//     });
//   }
 