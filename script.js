var element = document.querySelector('#slider-value');
let current_value = 2;

element.addEventListener('change', (event) => {
  if (current_value < event.target.value) {
    current_value++;
    
    var parent = document.querySelector('#jobs-wrapper');

    var container_large = document.createElement('div');
    container_large.setAttribute('class', 'container-large margin-top margin-xxlarge');

    var heading = document.createElement('h3');
    heading.setAttribute('class', 'heading-style-h3');
    heading.innerHTML = `Add job ${current_value} details`
    container_large.append(heading)

    var margin_job_details = document.createElement('div');
    margin_job_details.setAttribute('class', 'margin-top margin-medium is--relative');

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
    job_details_wrapper__grid.innerHTML = `<input type="text" class="fs-input_field w-node-dc5c7b47-21bb-07e1-c186-0837db214083-8efa05fd w-input" maxlength="256"
    name="Job-title-${current_value}" data-name="Job-title-${current_value}" placeholder="Job title"
    id="Job-title-${current_value}">
<div fs-selectcustom-element="dropdown" data-delay="0" data-hover="false"
    id="w-node-ce715d50-d5de-3649-da19-3459e64cf688-8efa05fd" class="fs-select-1 w-dropdown">
    <div class="fs-select_toggle-1 w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1"
        aria-haspopup="listbox" aria-expanded="false" role="button" tabindex="0">
        <div class="fs-select_icon-1 w-icon-dropdown-toggle" aria-hidden="true"></div>
        <div class="fs-select_text-1">Junior Level</div>
    </div>
    <nav class="fs-select_list-1 w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1"
        role="listbox" aria-multiselectable="false"><select id="Select-experience-level-${current_value}"
            name="Select-experience-level-${current_value}" data-name="Select-experience-level-${current_value}"
            class="fs-select_field-1 w-select">
            <option value="Junior Level">Junior Level</option>
            <option value="Mid level">Mid level</option>
            <option value="Second">Senior Level</option>
            <option value="ceo">CEO</option>
        </select><a href="#" class="fs-select_link-1 w-dropdown-link w--current" tabindex="0" role="option"
            aria-selected="true">Junior Level</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1"
            role="option" aria-selected="false">Mid level</a><a href="#" class="fs-select_link-1 w-dropdown-link"
            tabindex="-1" role="option" aria-selected="false">Senior Level</a><a href="#"
            class="fs-select_link-1 w-dropdown-link" tabindex="-1" role="option" aria-selected="false">CEO</a></nav>
</div>
<div fs-selectcustom-element="dropdown" data-delay="0" data-hover="false"
    id="w-node-_0f6e73c3-6c6a-a7b7-7c6b-99e7225667fc-8efa05fd" class="fs-select-1 w-dropdown">
    <div class="fs-select_toggle-1 w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2"
        aria-haspopup="listbox" aria-expanded="false" role="button" tabindex="0">
        <div class="fs-select_icon-1 w-icon-dropdown-toggle" aria-hidden="true"></div>
        <div class="fs-select_text-1">Part-time</div>
    </div>
    <nav class="fs-select_list-1 w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2"
        role="listbox" aria-multiselectable="false"><select id="Select-Job-type-4"
            name="Select-Job-type-${current_value}" data-name="Select-Job-type-${current_value}" required=""
            class="fs-select_field-1 w-select">
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
        </select><a href="#" class="fs-select_link-1 w-dropdown-link w--current" tabindex="0" role="option"
            aria-selected="true">Part-time</a><a href="#" class="fs-select_link-1 w-dropdown-link" tabindex="-1"
            role="option" aria-selected="false">Full-time</a><a href="#" class="fs-select_link-1 w-dropdown-link"
            tabindex="-1" role="option" aria-selected="false">Contract</a></nav>
</div><input type="text" class="fs-input_field w-node-_4a95e53b-9f15-9fb4-e91d-4a03a8010c8e-8efa05fd w-input"
    maxlength="256" name="Job-Category-${current_value}" data-name="Job-Category-${current_value}"
    placeholder="Job Category" id="Job-Category-${current_value}"><input type="email"
    class="fs-input_field w-node-e810f514-91f8-58f5-ef2e-b5108deeeddd-8efa05fd w-input" maxlength="256"
    name="Email-job-${current_value}" data-name="Email-job-${current_value}" placeholder="Email to apply"
    id="Email-job" required="">`

    job_details_wrapper.append(job_details_wrapper__grid)
    margin_job_details.append(job_details_container)
    container_large.append(margin_job_details)
    parent.append(container_large)

    //compensation
    var container_large_compensation = document.createElement('div');
    container_large_compensation.setAttribute('class', 'container-large margin-top margin-xxlarge');

    var heading_compensation = document.createElement('h3');
    heading_compensation.setAttribute('class', 'heading-style-h3');
    heading_compensation.innerHTML = `Compensation ${current_value}`
    container_large_compensation.append(heading_compensation)


    var margin_job_details_comp = document.createElement('div');
    margin_job_details_comp.setAttribute('class', 'margin-top margin-medium is--relative');
    margin_job_details_comp.append(underlay)
    

    //job details
    var job_details_container_comp = document.createElement('div');
    job_details_container_comp.setAttribute('class', 'job-details-container');
    margin_job_details_comp.append(job_details_container_comp)

    var job_details_wrapper_comp = document.createElement('div');
    job_details_wrapper_comp.setAttribute('class', 'job-details-wrapper');
    job_details_container_comp.append(job_details_wrapper_comp)

    var job_details_wrapper__grid_comp = document.createElement('div');
    job_details_wrapper__grid_comp.setAttribute('class', 'job-item-content--wrapper is--grid_4');
    job_details_wrapper__grid_comp.innerHTML = `<input type="number" class="fs-input_field w-node-d997b593-e85c-2e53-aa83-df1df3336340-8efa05fd w-input" maxlength="256"
    name="Min-sal-${current_value+1}" data-name="Min-sal-${current_value+1}" placeholder="Minimum Salary"
    id="Min-sal-${current_value+1}" required=""><input type="number"
    class="fs-input_field w-node-d997b593-e85c-2e53-aa83-df1df3336353-8efa05fd w-input" maxlength="256"
    name="Max-sal-${current_value+1}" data-name="Max-sal-${current_value+1}" placeholder="Maximum Salary"
    id="Max-sal-${current_value+1}" required="">
<p id="w-node-_55a05724-e6fe-45f8-1a41-81c1b9961bc6-8efa05fd" class="text-weight-light">No worries if the company is not
    listed yet, let’s fill out the fields below and make it happen.</p><input type="text"
    class="fs-input_field w-node-d997b593-e85c-2e53-aa83-df1df3336354-8efa05fd w-input" maxlength="256"
    name="Min-eq-${current_value+1}" data-name="Min-eq-${current_value+1}" placeholder="Minimum Equity (If provided)"
    id="Min-eq-${current_value+1}"><input type="text"
    class="fs-input_field w-node-_16fff19b-86dc-5ba6-ccd7-01d1f071dd22-8efa05fd w-input" maxlength="256"
    name="Max-eq-${current_value+1}" data-name="Max-eq-${current_value+1}" placeholder="Maximum Equity (If provided)"
    id="Max-eq-${current_value+1}">
<div id="w-node-c02f9cb0-2c77-6a1b-90fb-f7640725f3a4-8efa05fd" class="remote--switech"><label
        id="w-node-c02f9cb0-2c77-6a1b-90fb-f7640725f3a5-8efa05fd" class="w-checkbox fs-checkbox_toggle-7">
        <div class="fs-checkbox_toggle-dot-7"></div><input type="checkbox" class="w-checkbox-input fs-checkbox_button-7"
            name="option-pay-crypto-${current_value+1}" fs-cmsfilter-field="featured"
            data-name="option-pay-crypto-${current_value+1}" aria-label="add_description_here"
            id="option-pay-crypto-${current_value+1}"><span class="fs-checkbox_label-7 w-form-label"
            for="option-pay-crypto-${current_value+1}">Checkbox 8</span>
        <div class="fs-checkbox_mask-7"></div>
    </label>
    <h5 id="w-node-c02f9cb0-2c77-6a1b-90fb-f7640725f3ab-8efa05fd" class="text-weight-light">Option to pay in crypto</h5>
</div>`

    job_details_wrapper_comp.append(job_details_wrapper__grid_comp)
    margin_job_details_comp.append(job_details_container_comp)

    container_large_compensation.append(margin_job_details_comp);
    parent.append(container_large_compensation)


    console.log('greater')
    current_value = event.target.value;
  } else {
    console.log('smaller');
    current_value = event.target.value;
  }
});
