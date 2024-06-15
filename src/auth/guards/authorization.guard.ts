import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { Role } from '../role.enum';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
     
      const token = this.extractTokenFromHeader(request);
      
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: 'loi'
          }
        );
        
        request['user'] = payload;
         // Check role if needed (optional):
          if (!this.hasRole(payload.sub, Role.Admin)) {
            throw new UnauthorizedException('Insufficient permissions');
          }
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
     // Optional helper function to check roles (assuming 'role' in payload)
    private hasRole(userRole: string, requiredRole: Role): boolean {
      console.log('check Role' , userRole);
      if(userRole == '1'){
        return true;
      }
    }
}