var element = document.querySelector('#slider-value');
let current_value = 2;

element.addEventListener('change', (event) => {
  if (current_value < event.target.value) {

    var parent = document.querySelector('#jobs-wrapper');

    var container_large = document.createElement('div');
    container_large.setAttribute('class', 'container-large margin-top margin-xxlarge');
    
    var heading = document.createElement('h3');
    heading.setAttribute('class', 'heading-style-h3');
    heading.innerHTML = 'Add job details'
    container_large.append(heading)

    var margin_job_details = document.createElement('div');
    margin_job_details.setAttribute('class', 'margin-top margin-medium is--relative');
    container_large.append(margin_job_details)


    var underlay = document.createElement('div');
    underlay.setAttribute('class', 'underlay');
    margin_job_details.append(underlay)

    //job details
    var job_details_container = document.createElement('div');
    job_details_container.setAttribute('class', 'job-details-container');
    margin_job_details.append(job_details_container)

    var job_details_wrapper = document.createElement('div');
    job_details_wrapper.setAttribute('class', 'job-details-wrapper');
    job_details_container.append(job_details_wrapper)

    var job_details_wrapper__grid = document.createElement('div');
    job_details_wrapper__grid.setAttribute('class', 'job-item-content--wrapper is--grid_4');
    job_details_wrapper__grid.innerHTML = '<input type="text" class="fs-input_field w-node-dc5c7b47-21bb-07e1-c186-0837db214083-8efa05fd w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Job title" id="name-3"><div fs-selectcustom-element="dropdown" data-delay="0" data-hover="false" id="w-node-_2835fd21-2d37-7305-3df1-33f5263481df-8efa05fd" data-w-id="2835fd21-2d37-7305-3df1-33f5263481df" class="fs-select-1 w-dropdown"><div class="fs-select_toggle-1 w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="listbox" aria-expanded="false" role="button" tabindex="0"><div class="fs-select_icon-1 w-icon-dropdown-toggle" aria-hidden="true"></div><div class="fs-select_text-1">Select one...</div></div><nav class="fs-select_list-1 w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0" role="listbox" aria-multiselectable="false"><select id="select-field" name="select-field-1" data-name="select field 1" class="fs-select_field-1 w-select"><option value="">Select one...</option><option value="First">First choice</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select><a href="#" class="fs-select_link-1 w-dropdown-link w--current" tabindex="0" role="option" aria-selected="true">Select one...</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">First choice</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">Second choice</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">Third choice</a></nav></div><div fs-selectcustom-element="dropdown" data-delay="0" data-hover="false" id="w-node-fdb3bfc3-11fa-899c-8b1a-c25b7e4294fe-8efa05fd" data-w-id="fdb3bfc3-11fa-899c-8b1a-c25b7e4294fe" class="fs-select-1 w-dropdown"><div class="fs-select_toggle-1 w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="listbox" aria-expanded="false" role="button" tabindex="0"><div class="fs-select_icon-1 w-icon-dropdown-toggle" aria-hidden="true"></div><div class="fs-select_text-1">Select one...</div></div><nav class="fs-select_list-1 w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1" role="listbox" aria-multiselectable="false"><select id="select-field" name="select-field-1" data-name="select field 1" class="fs-select_field-1 w-select"><option value="">Select one...</option><option value="First">First choice</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select><a href="#" class="fs-select_link-1 w-dropdown-link w--current" tabindex="0" role="option" aria-selected="true">Select one...</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">First choice</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">Second choice</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">Third choice</a></nav></div><input type="text" class="fs-input_field w-node-_4a95e53b-9f15-9fb4-e91d-4a03a8010c8e-8efa05fd w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Job title" id="name-3"><input type="text" class="fs-input_field w-node-e810f514-91f8-58f5-ef2e-b5108deeeddd-8efa05fd w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Job title" id="name-3">'

    job_details_wrapper.append(job_details_wrapper__grid)
    margin_job_details.append(job_details_container)
    parent.append(container_large)

    // var job_compensation_detail = document.createElement('div');
    // job_compensation_detail.setAttribute('class', 'container-large margin-top margin-xxlarge');
    // job_details_container.append(job_compensation_detail)
    var container_large_compensation = document.createElement('div');
    container_large_compensation.setAttribute('class', 'container-large margin-top margin-xxlarge');
    
    var heading_compensation = document.createElement('h3');
    heading_compensation.setAttribute('class', 'heading-style-h3');
    heading_compensation.innerHTML = 'Compensation'
    container_large_compensation.append(heading)

    container_large_compensation.append(margin_job_details);
    margin_job_details.append(underlay)

    //job details
    var job_details_container = document.createElement('div');
    job_details_container.setAttribute('class', 'job-details-container');
    margin_job_details.append(job_details_container)

    var job_details_wrapper = document.createElement('div');
    job_details_wrapper.setAttribute('class', 'job-details-wrapper');
    job_details_container.append(job_details_wrapper)

    var job_details_wrapper__grid = document.createElement('div');
    job_details_wrapper__grid.setAttribute('class', 'job-item-content--wrapper is--grid_4');
    job_details_wrapper__grid.innerHTML = '<input type="number" class="fs-input_field w-node-d997b593-e85c-2e53-aa83-df1df3336340-8efa05fd w-input" maxlength="256" name="Min-sal" data-name="Min-sal" placeholder="Minimum Salary" id="Min-sal"><input type="number" class="fs-input_field w-node-d997b593-e85c-2e53-aa83-df1df3336353-8efa05fd w-input" maxlength="256" name="Max-sal" data-name="Max-sal" placeholder="Maximum Salary" id="Max-sal"><p id="w-node-_55a05724-e6fe-45f8-1a41-81c1b9961bc6-8efa05fd" class="text-weight-light">No worries if the company is not listed yet, let’s fill out the fields below and make it happen.</p><input type="text" class="fs-input_field w-node-d997b593-e85c-2e53-aa83-df1df3336354-8efa05fd w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Minimum Equity (If provided)" id="name-3"><input type="text" class="fs-input_field w-node-_16fff19b-86dc-5ba6-ccd7-01d1f071dd22-8efa05fd w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Maximum Equity (If provided)" id="name-3"><div id="w-node-c02f9cb0-2c77-6a1b-90fb-f7640725f3a4-8efa05fd" class="remote--switech"><label id="w-node-c02f9cb0-2c77-6a1b-90fb-f7640725f3a5-8efa05fd" class="w-checkbox fs-checkbox_toggle-7"><div class="fs-checkbox_toggle-dot-7"></div><input type="checkbox" class="w-checkbox-input fs-checkbox_button-7" name="Checkbox-7" fs-cmsfilter-field="featured" data-name="Checkbox 7" aria-label="add_description_here" id="Checkbox-7"><span class="fs-checkbox_label-7 w-form-label" for="Checkbox-7">Checkbox 8</span><div class="fs-checkbox_mask-7"></div></label><h5 id="w-node-c02f9cb0-2c77-6a1b-90fb-f7640725f3ab-8efa05fd" class="text-weight-light">Option to pay in crypto</h5></div>'

    job_details_wrapper.append(job_details_wrapper__grid)
    margin_job_details.append(job_details_container)
    parent.append(container_large_compensation)


    console.log('greater')
    current_value = event.target.value;
  } else {
    console.log('smaller');
    current_value = event.target.value;
  }
});
