<template>
    <header>
        <h3 class="text-center text-info">Pinia State Manager</h3>
        <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-1">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/profile.jpg" alt="Photo" class="img-fluid avatar rounded-5" width="40">
                </a>
                <!-- <a class="navbar-brand" href="#">VuePinia </a> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/routes" class="nav-link" aria-current="page">Routes</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Managers
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/todos">Tasks</router-link></li>
                            <li><router-link class="dropdown-item" to="/posts">Posts</router-link></li>
                            <li><router-link class="dropdown-item" to="/calendar">Calendar</router-link></li>
                            <!-- <li><router-link class="dropdown-item" to="/manager/markdown">Markdown</router-link></li>
                            <li><router-link class="dropdown-item" to="/manager/debounce">Debounce</router-link></li> -->
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" to="/settings">Settings</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bookings
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/bus-tracker">Bus Tracker</router-link></li>
                            <li><router-link class="dropdown-item" to="/bookings">My Bookings</router-link></li>
                            <!-- <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li> -->
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" to="/settings">Settings</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tools
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/tools/markdown">Markdown</router-link></li>
                            <li><router-link class="dropdown-item" to="/tools/debounce">Debounce</router-link></li>
                            <li><router-link class="dropdown-item" to="/tools/carousel">Carousel</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contacts" class="nav-link" aria-current="page">Contacts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/demo/test" class="nav-link" aria-current="page">Demo Test</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <hr>

    </header>
</template>

<script>
export default {
    setup () {
        const name = "The Header"

        return {
            name,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>