
function fillDAndIFields (futureCalls) {
    console.log|(futureCalls);
}

$.ajax({
    url: "https://wiki.mozilla.org/Diversity_and_Inclusion_for_Communities_and_Contributors",
    dataType: "html", // Need to make sure html tags are whitelisted/ blacklisted to avoid injection
    context: document.body,
    success: function(response) {
        let futureCalls = response.data;
        fillDAndIFields(futureCalls);
    }
});