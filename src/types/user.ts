export namespace UserTypes {
  export interface Entity {
    id: string;
    githubId?: number;
    name: string;
    email?: string;
    password?: string;
    resetPasswordToken?: string;
    avatarUrl?: string;
    // Banks: Bank[];
  }

  export interface Dto {
    id: Entity['id'];
    githubId: Entity['githubId'];
    name: Entity['name'];
    email: Entity['email'];
    avatarUrl: Entity['avatarUrl'];
  }
}
