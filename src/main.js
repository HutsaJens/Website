document.addEventListener("DOMContentLoaded", function () {
  // --- Clock Functionality ---
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    const timeDisplay = document.querySelector('.taskbar-time');
    if (timeDisplay) {
      timeDisplay.textContent = strTime;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // --- Window Dragging & Z-Index ---
  const windows = document.querySelectorAll('.win95-window');
  let highestZ = 100;

  windows.forEach(win => {
    const titleBar = win.querySelector('.window-title-bar');
    
    // Bring to front on click
    win.addEventListener('mousedown', () => {
      highestZ++;
      win.style.zIndex = highestZ;
      updateTaskbarActiveState(win);
    });

    // Dragging Logic
    if (titleBar) {
      let isDragging = false;
      let startX, startY, initialLeft, initialTop;

      titleBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        const rect = win.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;
        
        // Prevent text selection during drag
        e.preventDefault();
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        win.style.left = `${initialLeft + dx}px`;
        win.style.top = `${initialTop + dy}px`;
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }

    // Close Button Logic
    const closeBtn = win.querySelector('.title-btn'); // Assuming X is the first/only btn
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bring-to-front if unnecessary
        win.style.display = 'none';
      });
    }
  });

  // --- Taskbar Interaction ---
  const taskbarItems = document.querySelectorAll('.taskbar-item');
  
  function updateTaskbarActiveState(activeWindow) {
    // Reset all
    taskbarItems.forEach(item => item.classList.remove('active'));
    
    // Find corresponding taskbar item (simple matching by text for now)
    const winTitle = activeWindow.querySelector('.title-text').textContent;
    taskbarItems.forEach(item => {
      if (item.textContent === winTitle) {
        item.classList.add('active');
      }
    });
  }

  taskbarItems.forEach(item => {
    item.addEventListener('click', () => {
      const winTitle = item.textContent;
      // Find window by title
      let targetWin = null;
      windows.forEach(win => {
        if (win.querySelector('.title-text').textContent === winTitle) {
          targetWin = win;
        }
      });

      if (targetWin) {
        if (targetWin.style.display === 'none') {
          targetWin.style.display = 'flex';
          highestZ++;
          targetWin.style.zIndex = highestZ;
          updateTaskbarActiveState(targetWin);
        } else {
          // If already active and on top, minimize (hide)
          // Check if it's the top window
          if (parseInt(targetWin.style.zIndex) === highestZ) {
            targetWin.style.display = 'none';
            item.classList.remove('active');
          } else {
            // Bring to front
            highestZ++;
            targetWin.style.zIndex = highestZ;
            updateTaskbarActiveState(targetWin);
          }
        }
      }
    });
  });

  // --- Start Button ---
  const startBtn = document.querySelector('.start-btn');
  startBtn.addEventListener('click', () => {
    startBtn.classList.toggle('active');
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });
});
