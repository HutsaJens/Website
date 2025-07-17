import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-snake-game',
  imports: [CommonModule, RouterModule],
  templateUrl: './snake-game.html',
  styleUrl: './snake-game.css'
})
export class SnakeGame implements AfterViewInit, OnDestroy {
  @ViewChild('gameCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private gameLoop: any;
  private grid = 20;
  private count = 0;
  private speed = 8;
  
  score = 0;
  gameRunning = false;
  
  private snake = {
    x: 160,
    y: 160,
    dx: this.grid,
    dy: 0,
    cells: [] as Array<{x: number, y: number}>,
    maxCells: 4
  };
  
  private apple = {
    x: 320,
    y: 320
  };

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.generateApple();
  }

  ngOnDestroy() {
    if (this.gameLoop) {
      cancelAnimationFrame(this.gameLoop);
    }
  }

  startGame() {
    this.gameRunning = true;
    this.loop();
  }

  resetGame() {
    this.gameRunning = false;
    if (this.gameLoop) {
      cancelAnimationFrame(this.gameLoop);
    }
    
    this.score = 0;
    this.snake = {
      x: 160,
      y: 160,
      dx: this.grid,
      dy: 0,
      cells: [],
      maxCells: 4
    };
    this.generateApple();
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (!this.gameRunning) return;
    
    if (event.key === 'ArrowLeft' && this.snake.dx === 0) {
      this.snake.dx = -this.grid;
      this.snake.dy = 0;
    } else if (event.key === 'ArrowUp' && this.snake.dy === 0) {
      this.snake.dy = -this.grid;
      this.snake.dx = 0;
    } else if (event.key === 'ArrowRight' && this.snake.dx === 0) {
      this.snake.dx = this.grid;
      this.snake.dy = 0;
    } else if (event.key === 'ArrowDown' && this.snake.dy === 0) {
      this.snake.dy = this.grid;
      this.snake.dx = 0;
    }
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateApple() {
    this.apple.x = this.getRandomInt(0, 20) * this.grid;
    this.apple.y = this.getRandomInt(0, 20) * this.grid;
  }

  private loop() {
    this.gameLoop = requestAnimationFrame(() => this.loop());
    
    if (++this.count < this.speed) {
      return;
    }
    this.count = 0;
    
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
    // Move snake
    this.snake.x += this.snake.dx;
    this.snake.y += this.snake.dy;
    
    // Wrap snake around edges
    if (this.snake.x < 0) {
      this.snake.x = this.canvas.nativeElement.width - this.grid;
    } else if (this.snake.x >= this.canvas.nativeElement.width) {
      this.snake.x = 0;
    }
    
    if (this.snake.y < 0) {
      this.snake.y = this.canvas.nativeElement.height - this.grid;
    } else if (this.snake.y >= this.canvas.nativeElement.height) {
      this.snake.y = 0;
    }
    
    // Add new head
    this.snake.cells.unshift({ x: this.snake.x, y: this.snake.y });
    
    // Remove tail if not eating
    if (this.snake.cells.length > this.snake.maxCells) {
      this.snake.cells.pop();
    }
    
    // Draw apple
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(this.apple.x, this.apple.y, this.grid - 1, this.grid - 1);
    
    // Draw snake
    this.ctx.fillStyle = '#22c55e';
    this.snake.cells.forEach((cell, index) => {
      this.ctx.fillRect(cell.x, cell.y, this.grid - 1, this.grid - 1);
      
      // Check if snake ate apple
      if (cell.x === this.apple.x && cell.y === this.apple.y) {
        this.snake.maxCells++;
        this.score += 10;
        this.generateApple();
      }
      
      // Check collision with self
      for (let i = index + 1; i < this.snake.cells.length; i++) {
        if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
          this.gameRunning = false;
          return;
        }
      }
    });
  }
}
