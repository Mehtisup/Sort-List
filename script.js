<script>
function sortFunction() {
    var list, i, sweetching, b, shouldSwitch;

    list = document.getElementById("list");
    sweetching = true;

    while (sweetching) {
        sweetching = false;
        b = document.getElementsByClassName("link");

        for (i = 0 ; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            sweetching = true;
        }
    }
}
</script>
