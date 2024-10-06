document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  )
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // Handle sidebar toggle on mobile
  const sidebarToggle = document.querySelector(".navbar-toggler")
  const sidebar = document.querySelector(".sidebar")
  const mainContent = document.querySelector(".main-content")

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("show")
      mainContent.classList.toggle("sidebar-open")
    })
  }

  // Sample data for work log
  const workLog = [
    {
      date: "01/10/2567",
      task: "จัดทำรายงานประจำเดือน",
      dueDate: "31/10/2567",
      status: "กำลังดำเนินการ",
    },
    {
      date: "05/10/2567",
      task: "ประชุมทีมประจำสัปดาห์",
      dueDate: "05/10/2567",
      status: "เสร็จสิ้น",
    },
    {
      date: "10/10/2567",
      task: "สัมภาษณ์ผู้สมัครงานใหม่",
      dueDate: "15/10/2567",
      status: "รอดำเนินการ",
    },
  ]

  // Function to populate the work log table
  function populateWorkLog() {
    const tableBody = document.getElementById("workLogTableBody")
    tableBody.innerHTML = ""
    workLog.forEach((log) => {
      const row = `
                <tr>
                    <td>${log.date}</td>
                    <td>${log.task}</td>
                    <td>${log.dueDate}</td>
                    <td><span class="badge bg-${getStatusColor(log.status)}">${
        log.status
      }</span></td>
                </tr>
            `
      tableBody.innerHTML += row
    })
  }

  // Function to get appropriate color for status badge
  function getStatusColor(status) {
    switch (status) {
      case "เสร็จสิ้น":
        return "success"
      case "กำลังดำเนินการ":
        return "warning"
      case "รอดำเนินการ":
        return "info"
      default:
        return "secondary"
    }
  }

  // Call function to populate the table when the page loads
  populateWorkLog()

  // Handle active state for sidebar menu items
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-link")
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      sidebarLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Handle window resize for responsive sidebar
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("show")
      mainContent.classList.remove("sidebar-open")
    }
  })
})
