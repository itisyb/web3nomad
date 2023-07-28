window.Webflow ||= [];
window.Webflow.push(() => {
    var quill = new Quill('#JobDescription_1', {
        modules: {
          toolbar: [[{
            container: '#Toolbar_1',
              }],
            [{ 'header': 2 }, { 'header': 3 }, { 'header': 4 }],
            ['bold', 'italic'],
            ['link', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        placeholder: 'Add Description',
        theme: 'snow'
      });      
    
    const form = $('form')
    function kFormatter(num) {
        let number = parseInt(num)
    return Math.abs(number) > 999 ? Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + 'k' : Math.sign(number)*Math.abs(number)
    }

    $('[custom="next_btn"]').on('click', () => {
    if (! $('form')[0].checkValidity()) {
            $('form')[0].reportValidity()
    }else if($('form')[0].checkValidity()){
        
    document.querySelector(`textarea[name=JobDescription_1]`).value = quill.root.innerHTML;

    function setValueOrHideParent(selector, value) {
        if (value !== '') {
          $(selector).text(value);
        } else {
          $(selector).parent().hide();
        }
      }   
      const jobDescription = $('textarea[name="JobDescription_1"]').val();
      setValueOrHideParent('[custom="preview_description"]', jobDescription);
      
      const jobTitle = $('input[name="JobTitle_1"]').val();
      const companyName = $('input[name="CompanyName"]').val();
      setValueOrHideParent('[custom="job_title"]', (jobTitle !== '' && companyName !== '') ? jobTitle + ' at ' + companyName : '');
      
      const minSalary = $('input[name="MinSal_1"]').val();
      const maxSalary = $('input[name="MaxSal_1"]').val();
      setValueOrHideParent('[custom="salary_range"]', (minSalary !== '' && maxSalary !== '') ? `$${kFormatter(minSalary)} - $${kFormatter(maxSalary)}` : '');
      
// Repeat the above pattern for each attribute with an empty value check
setValueOrHideParent('[custom="preview_description"]', $('input[name="JobDescription_1"]').val());
setValueOrHideParent('[custom="primary_category"]', $('select[name="PrimaryCategory_1"]').val());
setValueOrHideParent('[custom="primary_role"]', $('select[name="PrimaryRole_1"]').val());
setValueOrHideParent('[custom="company_name"]', $('input[name="CompanyName"]').val());
setValueOrHideParent('[custom="company_location"]', $('select[name="CompanyCountry"]').val());
setValueOrHideParent('[custom="job_type"]', $('select[name="JobType_1"]').val());
$('[custom="company_logo"]').attr('src', $('input[name="CompanyLogo"]').val());
setValueOrHideParent('[custom="company_logo"]', $('input[name="CompanyLogo"]').val());
$('[aria-label="next slide"]').click() 
$('[aria-label="next slide"]').css('opacity', '100')
$('[aria-label="next slide"]').css('pointerEvents', 'all')
$('[aria-label="next slide"]').css('z-index', '10')
	}
    })
});
