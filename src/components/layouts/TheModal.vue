<template>
    <div>
        <!-- Modal -->
        <div class="modal fade-in" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <div class="form-group">
                        <label for="taskName" class="form-control">Task Name <span class="text-danger">*</span></label>
                        <input type="text" name="taskName" id="taskName" class="form-control" placeholder="Enter Task Name">
                </div>

                <div class="form-group">
                        <label for="isCompleted" class="form-control">Status <span class="text-danger">*</span></label>
                        <select name="isCompleted" id="isCompleted" class="form-control">
                            <option value="">Select Status</option>
                            <option value="false">Incomplete</option>
                            <option value="true">Completed</option>
                        </select>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        const name =  "The Modal"

        return {
            name,
        }
    }
}
</script>

<style scoped>

</style>